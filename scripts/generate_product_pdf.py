"""
GM Therapy Solutions — Quote Product PDF Generator
====================================================
Usage:
    python generate_product_pdf.py <estimate.pdf> [options]

Options:
    --preparer "Name · GMTS"     Override rep name (default: Cyler · GM Therapy Solutions)
    --layout auto|detailed|standard|compact   Override layout (default: auto)
    --output output.pdf          Override output filename

Layout auto-selection by item count:
    1–8   → detailed   (full-width rows, large photos, full specs)
    8–24  → standard   (3-column card grid)
    24+   → compact    (stats bar + table)
"""

import sys
import os
import re
import argparse
import requests
import io
import json
from collections import defaultdict

import pdfplumber
from PIL import Image
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

# ── Constants ──────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = letter  # 612 x 792

ORANGE      = colors.HexColor("#F97316")
DARK        = colors.HexColor("#1A1A1A")
LIGHT_GRAY  = colors.HexColor("#E5E7EB")
MED_GRAY    = colors.HexColor("#6B7280")
BG_GRAY     = colors.HexColor("#F9FAFB")
WHITE       = colors.white
BLACK       = colors.black

CATALOG_URL = "https://raw.githubusercontent.com/cylermatlock/catalog-to-checkout/main/public/catalog.json"
LOGO_URL    = "https://raw.githubusercontent.com/cylermatlock/catalog-to-checkout/main/public/assets/gm-therapy-logo.png"
CATALOG_IMG_BASE = "https://raw.githubusercontent.com/cylermatlock/catalog-to-checkout/main/public"

CONTACT_WEBSITE = "gmtherapytx.com"
CONTACT_EMAIL   = "sales@gmtherapytx.com"
CONTACT_PHONE   = "940-334-5169"
TAGLINE         = "STRESS-FREE PT EQUIPMENT PURCHASING & SETUP"

DEFAULT_PREPARER = "Cyler · GM Therapy Solutions"

# ── Helpers ────────────────────────────────────────────────────────────────

def fetch_image(url):
    """Fetch an image from a URL and return a PIL Image, or None on failure."""
    try:
        r = requests.get(url, timeout=8)
        if r.status_code == 200:
            return Image.open(io.BytesIO(r.content)).convert("RGBA")
    except Exception:
        pass
    return None


def fetch_logo():
    """Fetch the GMTS logo, crop tight to non-white pixels."""
    img = fetch_image(LOGO_URL)
    if img is None:
        return None
    # Crop tight
    bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
    diff = Image.new("L", img.size)
    for x in range(img.width):
        for y in range(img.height):
            px = img.getpixel((x, y))
            if px[3] < 10 or (px[0] > 240 and px[1] > 240 and px[2] > 240):
                diff.putpixel((x, y), 0)
            else:
                diff.putpixel((x, y), 255)
    bbox = diff.getbbox()
    if bbox:
        img = img.crop(bbox)
    return img


def pil_to_reportlab(pil_img):
    """Convert a PIL image to a ReportLab ImageReader."""
    buf = io.BytesIO()
    rgb = pil_img.convert("RGB")
    rgb.save(buf, format="PNG")
    buf.seek(0)
    return ImageReader(buf)


def fetch_catalog():
    """Fetch and return the product catalog as a dict keyed by SKU (upper)."""
    r = requests.get(CATALOG_URL, timeout=15)
    r.raise_for_status()
    data = r.json()
    products = data.get("products", [])
    catalog = {}
    for p in products:
        sku = p.get("sku", "").strip().upper()
        if sku:
            catalog[sku] = p
    return catalog


def resolve_image_url(relative_path):
    """Turn a relative catalog image path into a full URL."""
    if not relative_path:
        return None
    if relative_path.startswith("http"):
        return relative_path
    return CATALOG_IMG_BASE + relative_path


# ── Estimate PDF Parsing ───────────────────────────────────────────────────

def parse_estimate(pdf_path):
    """
    Parse a ZohoBooks estimate PDF.
    Returns a dict with keys: quote_number, date, contact_name, clinic_name,
    address, city_state_zip, line_items (list of dicts with sku, description,
    quantity, condition).
    """
    result = {
        "quote_number": "",
        "date": "",
        "contact_name": "",
        "clinic_name": "",
        "address": "",
        "city_state_zip": "",
        "line_items": [],
    }

    with pdfplumber.open(pdf_path) as pdf:
        page = pdf.pages[0]
        words = page.extract_words()

        # ── Quote number and date ──
        for i, w in enumerate(words):
            if w["text"].upper() == "ESTIMATE#":
                if i + 1 < len(words):
                    result["quote_number"] = words[i + 1]["text"]
            if w["text"].upper() == "DATE":
                if i + 1 < len(words):
                    result["date"] = words[i + 1]["text"]

        # ── Ship-to address block using bbox geometry ──
        address_x0 = None
        ship_x0 = None
        for w in words:
            if w["text"].upper() == "ADDRESS":
                address_x0 = w["x0"]
            if w["text"].upper() == "SHIP" and ship_x0 is None:
                ship_x0 = w["x0"]

        if address_x0 is not None and ship_x0 is not None:
            right_edge = ship_x0 - 5
            # Collect words in the address column
            addr_words = [
                w for w in words
                if w["x0"] >= address_x0 and w["x1"] <= right_edge + 20
                and w["top"] > 60  # skip header row itself
            ]
            # Group by y-bucket (words on same line)
            lines = defaultdict(list)
            for w in addr_words:
                bucket = round(w["top"] / 6) * 6
                lines[bucket].append(w["text"])
            sorted_lines = [" ".join(v) for k, v in sorted(lines.items())]
            # Filter out header labels
            skip = {"BILL", "TO", "SHIP", "ADDRESS", "BILLING", "SHIPPING"}
            filtered = [l for l in sorted_lines if l.strip().upper() not in skip and l.strip()]
            if len(filtered) >= 1:
                result["contact_name"] = filtered[0]
            if len(filtered) >= 2:
                result["clinic_name"] = filtered[1]
            if len(filtered) >= 3:
                result["address"] = filtered[2]
            if len(filtered) >= 4:
                result["city_state_zip"] = filtered[3]

        # ── Line items ──
        # Parse all pages for line items
        line_items = []
        for page in pdf.pages:
            text = page.extract_text() or ""
            lines = text.split("\n")
            for line in lines:
                item = _parse_line_item(line)
                if item:
                    line_items.append(item)

    result["line_items"] = line_items
    return result


# SKU pattern: letters, digits, spaces, hyphens, slashes
SKU_PATTERN = re.compile(
    r"^([A-Za-z]{1,6}\s?[A-Za-z0-9\-\/]{2,20})\s+(.+?)\s+(\d+(?:\.\d+)?)\s*$"
)
PLACEHOLDER_SKU = re.compile(r"^\(.*\)$")
CONTINUATION_SKIP = re.compile(r"^(page\s+\d+|subtotal|total|estimate|bill|ship|date|#)", re.I)


def _parse_line_item(line):
    """
    Try to parse a single text line as a ZohoBooks line item.
    Returns dict with sku, description, quantity, condition or None.
    """
    line = line.strip()
    if not line:
        return None
    if CONTINUATION_SKIP.match(line):
        return None

    # Detect pre-owned flag
    condition = "NEW"
    line_check = line.upper()
    if "PRE-OWNED" in line_check or "PREOWNED" in line_check or "USED" in line_check:
        condition = "PRE-OWNED"
        line = re.sub(r"pre-?owned|used", "", line, flags=re.I).strip()

    m = SKU_PATTERN.match(line)
    if not m:
        return None

    sku_raw = m.group(1).strip()
    description = m.group(2).strip()
    try:
        quantity = int(float(m.group(3)))
    except ValueError:
        quantity = 1

    # Strip placeholder SKUs like (ABC)
    if PLACEHOLDER_SKU.match(sku_raw):
        return None

    # Normalize SKU — preserve mixed case, just strip extra spaces
    sku = re.sub(r"\s+", " ", sku_raw).strip()

    return {
        "sku": sku,
        "description": description,
        "quantity": quantity,
        "condition": condition,
    }


# ── Catalog Matching ────────────────────────────────────────────────────────

def match_products(line_items, catalog):
    """
    Exact-match each line item SKU against catalog (case-insensitive).
    Returns list of dicts with line_item data + catalog product (or None).
    """
    results = []
    for item in line_items:
        sku_upper = item["sku"].upper()
        product = catalog.get(sku_upper)

        # Handle U- prefix SKUs (use new-version photo)
        if product is None and sku_upper.startswith("U-"):
            base = sku_upper[2:]
            product = catalog.get(base)

        # NS T6MAX fallback to T6PRO photo
        t6max_override_img = None
        if product is None and sku_upper == "NS T6MAX":
            t6pro = catalog.get("NS T6PRO")
            if t6pro:
                t6max_override_img = t6pro.get("image")

        results.append({
            **item,
            "product": product,
            "image_override": t6max_override_img,
        })
    return results


# ── PDF Drawing Utilities ───────────────────────────────────────────────────

def draw_logo(c, logo_img, x, y, target_height):
    """Draw the GMTS logo at (x, y) with a fixed height, aspect-preserved."""
    if logo_img is None:
        return
    w, h = logo_img.size
    aspect = w / h
    draw_w = target_height * aspect
    rl_img = pil_to_reportlab(logo_img)
    c.drawImage(rl_img, x, y, width=draw_w, height=target_height, mask="auto")


def draw_pill(c, x, y, w, h, text, bg_color, text_color=WHITE, font_size=6.5):
    """Draw a rounded-rect pill badge."""
    r = h / 2
    c.setFillColor(bg_color)
    c.roundRect(x, y, w, h, r, fill=1, stroke=0)
    c.setFillColor(text_color)
    c.setFont("Helvetica-Bold", font_size)
    c.drawCentredString(x + w / 2, y + h / 2 - font_size / 3, text)


def draw_closing_block(c, x, y, width, height, preparer):
    """
    Draw the closing block inline.
    preparer = "Cyler · GM Therapy Solutions" or override.
    """
    # Dark background
    c.setFillColor(DARK)
    c.rect(x, y, width, height, fill=1, stroke=0)

    # Thin gray line at top
    c.setStrokeColor(MED_GRAY)
    c.setLineWidth(0.5)
    c.line(x + 20, y + height - 1, x + width - 20, y + height - 1)

    mid = x + width / 2
    left_x = x + 28
    right_x = x + width - 28

    # Left side — headline
    headline_y = y + height - 28
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(left_x, headline_y, "Questions?")
    q_w = c.stringWidth("Questions?", "Helvetica-Bold", 14)
    c.setFillColor(ORANGE)
    c.drawString(left_x + q_w + 4, headline_y, " Let's talk.")

    # Body
    c.setFillColor(colors.HexColor("#9CA3AF"))
    c.setFont("Helvetica", 7.5)
    body = "Reply to this email or give me a call. I'll walk you through any"
    body2 = "item, swap pieces in or out, or build you a different configuration."
    c.drawString(left_x, headline_y - 14, body)
    c.drawString(left_x, headline_y - 24, body2)

    # Right side — contact
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 8)
    c.drawRightString(right_x, headline_y, preparer)
    c.setFont("Helvetica", 7.5)
    c.setFillColor(colors.HexColor("#9CA3AF"))
    c.drawRightString(right_x, headline_y - 12, CONTACT_WEBSITE)
    c.drawRightString(right_x, headline_y - 22, CONTACT_EMAIL)
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawRightString(right_x, headline_y - 32, CONTACT_PHONE)

    # Tagline centered at bottom
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 6.5)
    c.drawCentredString(mid, y + 10, TAGLINE)


# ── Detailed Layout (1–8 items) ─────────────────────────────────────────────

def build_detailed(c, matched_items, meta, logo_img, preparer):
    MARGIN = 0.5 * inch
    content_w = PAGE_W - 2 * MARGIN
    row_h = 1.6 * inch
    photo_w = 1.8 * inch
    text_x = MARGIN + photo_w + 16
    text_w = content_w - photo_w - 16
    y = PAGE_H - MARGIN

    def new_page():
        nonlocal y
        c.showPage()
        y = PAGE_H - MARGIN
        _draw_secondary_header(c, logo_img, meta)
        y -= 0.45 * inch

    # Page 1 hero
    y = _draw_hero_block(c, meta, logo_img, preparer, y)
    y -= 0.2 * inch

    for idx, item in enumerate(matched_items):
        if y - row_h < MARGIN + 0.3 * inch:
            new_page()

        product = item.get("product")
        img_url = None
        if item.get("image_override"):
            img_url = resolve_image_url(item["image_override"])
        elif product and product.get("image"):
            img_url = resolve_image_url(product["image"])

        # Card background
        c.setFillColor(colors.HexColor("#F9FAFB"))
        c.setStrokeColor(LIGHT_GRAY)
        c.setLineWidth(0.5)
        c.roundRect(MARGIN, y - row_h, content_w, row_h, 4, fill=1, stroke=1)

        # Photo area
        if img_url:
            pil_img = fetch_image(img_url)
        else:
            pil_img = None

        if pil_img:
            rl_img = pil_to_reportlab(pil_img)
            # Fit photo within photo area with padding
            ph, pw = row_h - 8, photo_w - 8
            iw, ih = pil_img.size
            scale = min(pw / iw, ph / ih)
            dw, dh = iw * scale, ih * scale
            px = MARGIN + 4 + (pw - dw) / 2
            py_img = y - row_h + 4 + (ph - dh) / 2
            c.drawImage(rl_img, px, py_img, width=dw, height=dh, mask="auto")
        else:
            c.setFillColor(MED_GRAY)
            c.setFont("Helvetica", 8)
            c.drawCentredString(MARGIN + photo_w / 2, y - row_h / 2 - 4, "No photo")

        # Product name
        name = product["name"] if product else item["description"]
        brand = _get_brand(product, name)
        if brand.lower() == "amazon" or brand.lower() == "amazon.com":
            brand = "Generic"

        c.setFillColor(DARK)
        c.setFont("Helvetica-Bold", 10)
        # Truncate name to 2 lines
        name_upper = name.upper()
        c.drawString(text_x, y - 16, name_upper[:55])
        if len(name_upper) > 55:
            c.setFont("Helvetica-Bold", 9)
            c.drawString(text_x, y - 27, name_upper[55:105])

        # SKU + QTY
        c.setFillColor(MED_GRAY)
        c.setFont("Helvetica", 8)
        sku_label = f"SKU: {item['sku']}   QTY: {item['quantity']}"
        c.drawString(text_x, y - 40, sku_label)

        # Bullets
        bullets = product.get("description", []) if product else []
        bullet_y = y - 52
        for bullet in bullets[:4]:
            if bullet_y < y - row_h + 8:
                break
            c.setFillColor(ORANGE)
            c.circle(text_x + 4, bullet_y + 3, 2, fill=1, stroke=0)
            c.setFillColor(DARK)
            c.setFont("Helvetica", 7.5)
            c.drawString(text_x + 10, bullet_y, bullet[:80])
            bullet_y -= 11

        # Pills
        pill_y = y - row_h + 8
        pill_x = text_x
        cond = item["condition"]
        pill_bg = DARK if cond == "NEW" else ORANGE
        draw_pill(c, pill_x, pill_y, 34, 12, cond, pill_bg)
        pill_x += 38

        if product and product.get("category"):
            cat = product["category"].upper()
            cat_w = min(c.stringWidth(cat, "Helvetica-Bold", 6.5) + 10, 90)
            draw_pill(c, pill_x, pill_y, cat_w, 12, cat, MED_GRAY)

        y -= row_h + 8

    # Closing block on final page
    closing_h = 0.9 * inch
    if y - closing_h < MARGIN:
        new_page()
    draw_closing_block(c, MARGIN, y - closing_h, content_w, closing_h, preparer)


# ── Standard Layout (8–24 items) ────────────────────────────────────────────

def build_standard(c, matched_items, meta, logo_img, preparer):
    MARGIN = 0.4 * inch
    content_w = PAGE_W - 2 * MARGIN
    COLS = 3
    card_w = (content_w - (COLS - 1) * 8) / COLS
    card_h = 2.75 * inch
    gap = 8

    y = PAGE_H - MARGIN
    y = _draw_hero_block(c, meta, logo_img, preparer, y)
    y -= _draw_stats_bar(c, matched_items, MARGIN, y - 0.1 * inch, content_w)
    y -= 0.15 * inch

    page_num = 1
    items_on_page = 0
    max_first_page = 6
    max_other_pages = 9

    col = 0
    row_top = y

    for item in matched_items:
        max_this_page = max_first_page if page_num == 1 else max_other_pages
        if items_on_page >= max_this_page:
            c.showPage()
            page_num += 1
            items_on_page = 0
            col = 0
            _draw_secondary_header(c, logo_img, meta)
            row_top = PAGE_H - MARGIN - 0.45 * inch

        if col == 0:
            pass  # row_top already set
        elif col == COLS:
            col = 0
            row_top -= card_h + gap

        card_x = MARGIN + col * (card_w + gap)
        card_y = row_top - card_h

        _draw_standard_card(c, card_x, card_y, card_w, card_h, item)

        col += 1
        items_on_page += 1

        if col == COLS:
            row_top -= card_h + gap
            col = 0

    # Closing block inline at bottom of last page
    closing_h = 0.88 * inch
    # Find bottom of last row
    if col > 0:
        last_row_bottom = row_top - card_h
    else:
        last_row_bottom = row_top

    close_y = last_row_bottom - closing_h - 10
    if close_y < MARGIN:
        c.showPage()
        _draw_secondary_header(c, logo_img, meta)
        close_y = PAGE_H - MARGIN - 0.45 * inch - closing_h

    draw_closing_block(c, MARGIN, close_y, content_w, closing_h, preparer)


def _draw_standard_card(c, x, y, w, h, item):
    """Draw a single standard layout card."""
    product = item.get("product")
    img_url = None
    if item.get("image_override"):
        img_url = resolve_image_url(item["image_override"])
    elif product and product.get("image"):
        img_url = resolve_image_url(product["image"])

    # Card background
    c.setFillColor(WHITE)
    c.setStrokeColor(LIGHT_GRAY)
    c.setLineWidth(0.5)
    c.roundRect(x, y, w, h, 4, fill=1, stroke=1)

    # Photo area (~45% of card height)
    photo_h = h * 0.44
    c.setFillColor(BG_GRAY)
    c.roundRect(x, y + h - photo_h, w, photo_h, 4, fill=1, stroke=0)

    # Brand chip top-left of photo
    name = product["name"] if product else item["description"]
    brand = _get_brand(product, name)
    if brand.lower() in ("amazon", "amazon.com"):
        brand = "Generic"
    brand_upper = brand.upper()
    brand_w = min(c.stringWidth(brand_upper, "Helvetica-Bold", 6) + 10, w * 0.6)
    draw_pill(c, x + 5, y + h - 16, brand_w, 12, brand_upper, ORANGE, WHITE, 6)

    # Photo
    if img_url:
        pil_img = fetch_image(img_url)
    else:
        pil_img = None

    if pil_img:
        rl_img = pil_to_reportlab(pil_img)
        pad = 6
        max_w = w - pad * 2
        max_h = photo_h - pad * 2 - 14
        iw, ih = pil_img.size
        scale = min(max_w / iw, max_h / ih)
        dw, dh = iw * scale, ih * scale
        px = x + pad + (max_w - dw) / 2
        py_img = y + h - photo_h + pad + (max_h - dh) / 2
        c.drawImage(rl_img, px, py_img, width=dw, height=dh, mask="auto")
    else:
        c.setFillColor(MED_GRAY)
        c.setFont("Helvetica", 7)
        c.drawCentredString(x + w / 2, y + h - photo_h / 2 - 3, "No photo")

    # Orange title bar
    title_bar_h = 28
    title_y = y + h - photo_h - title_bar_h
    c.setFillColor(ORANGE)
    c.rect(x, title_y, w, title_bar_h, fill=1, stroke=0)

    name_upper = name.upper()
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 7)
    # Split into 2 lines max
    words = name_upper.split()
    line1, line2 = "", ""
    for word in words:
        test = (line1 + " " + word).strip()
        if c.stringWidth(test, "Helvetica-Bold", 7) < w - 8:
            line1 = test
        else:
            line2 = (line2 + " " + word).strip()
    if line2:
        c.drawCentredString(x + w / 2, title_y + title_bar_h - 10, line1)
        c.drawCentredString(x + w / 2, title_y + title_bar_h - 20, line2[:40])
    else:
        c.drawCentredString(x + w / 2, title_y + title_bar_h / 2 - 3, line1)

    # SKU line
    sku_y = title_y - 11
    c.setFillColor(MED_GRAY)
    c.setFont("Helvetica-Bold", 6.5)
    c.drawCentredString(x + w / 2, sku_y, f"SKU: {item['sku']}")

    # Bullets (up to 3)
    bullets = product.get("description", []) if product else []
    bullet_y = sku_y - 12
    for bullet in bullets[:3]:
        if bullet_y < y + 18:
            break
        c.setFillColor(ORANGE)
        c.circle(x + 8, bullet_y + 3, 1.8, fill=1, stroke=0)
        c.setFillColor(DARK)
        c.setFont("Helvetica", 6)
        c.drawString(x + 13, bullet_y, bullet[:42])
        bullet_y -= 9

    # Bottom pills
    pill_y = y + 4
    pill_x = x + 5
    cond = item["condition"]
    pill_bg = DARK if cond == "NEW" else ORANGE
    draw_pill(c, pill_x, pill_y, 30, 10, cond, pill_bg, WHITE, 5.5)
    pill_x += 34

    if product and product.get("category"):
        cat = product["category"].upper()[:16]
        cat_w = min(c.stringWidth(cat, "Helvetica-Bold", 5.5) + 8, w - pill_x + x - 5)
        draw_pill(c, pill_x, pill_y, cat_w, 10, cat, MED_GRAY, WHITE, 5.5)


# ── Compact Layout (24+ items) ──────────────────────────────────────────────

def build_compact(c, matched_items, meta, logo_img, preparer):
    MARGIN = 0.4 * inch
    content_w = PAGE_W - 2 * MARGIN
    ROW_H = 0.52 * inch
    THUMB_W = 0.45 * inch

    y = PAGE_H - MARGIN
    y = _draw_hero_block(c, meta, logo_img, preparer, y)
    y -= _draw_stats_bar(c, matched_items, MARGIN, y - 0.1 * inch, content_w)
    y -= 0.2 * inch

    # Table header
    y = _draw_table_header(c, MARGIN, y, content_w)

    page_num = 1
    for idx, item in enumerate(matched_items):
        if y - ROW_H < MARGIN + 1.1 * inch:
            c.showPage()
            page_num += 1
            _draw_secondary_header(c, logo_img, meta)
            y = PAGE_H - MARGIN - 0.45 * inch
            y = _draw_table_header(c, MARGIN, y, content_w)

        _draw_compact_row(c, MARGIN, y, content_w, ROW_H, THUMB_W, item, idx)
        y -= ROW_H

    # Inline closing block
    closing_h = 0.88 * inch
    if y - closing_h < MARGIN:
        c.showPage()
        _draw_secondary_header(c, logo_img, meta)
        y = PAGE_H - MARGIN - 0.45 * inch

    draw_closing_block(c, MARGIN, y - closing_h, content_w, closing_h, preparer)


def _draw_table_header(c, x, y, w):
    header_h = 20
    c.setFillColor(DARK)
    c.rect(x, y - header_h, w, header_h, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 7)
    cols = [("PHOTO", 0.07), ("PRODUCT / SKU", 0.35), ("BRAND", 0.15),
            ("CONDITION", 0.15), ("HIGHLIGHTS", 0.28)]
    cx = x
    for label, frac in cols:
        cw = w * frac
        c.drawCentredString(cx + cw / 2, y - header_h + 6, label)
        cx += cw

    # Orange separator
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1.5)
    c.line(x, y - header_h - 1, x + w, y - header_h - 1)

    return y - header_h - 2


def _draw_compact_row(c, x, y, w, h, thumb_w, item, idx):
    product = item.get("product")

    # Alternating row bg
    if idx % 2 == 0:
        c.setFillColor(colors.HexColor("#F9FAFB"))
        c.rect(x, y - h, w, h, fill=1, stroke=0)

    # Light row border
    c.setStrokeColor(LIGHT_GRAY)
    c.setLineWidth(0.3)
    c.line(x, y - h, x + w, y - h)

    col_fracs = [0.07, 0.35, 0.15, 0.15, 0.28]
    col_x = x
    col_ws = [w * f for f in col_fracs]

    # Col 0: thumbnail
    img_url = None
    if item.get("image_override"):
        img_url = resolve_image_url(item["image_override"])
    elif product and product.get("image"):
        img_url = resolve_image_url(product["image"])

    if img_url:
        pil_img = fetch_image(img_url)
        if pil_img:
            rl_img = pil_to_reportlab(pil_img)
            pad = 3
            max_dim = min(col_ws[0] - pad * 2, h - pad * 2)
            iw, ih = pil_img.size
            scale = min(max_dim / iw, max_dim / ih)
            dw, dh = iw * scale, ih * scale
            px = col_x + (col_ws[0] - dw) / 2
            py_img = y - h + (h - dh) / 2
            c.drawImage(rl_img, px, py_img, width=dw, height=dh, mask="auto")
        else:
            c.setFillColor(MED_GRAY)
            c.setFont("Helvetica", 6)
            c.drawCentredString(col_x + col_ws[0] / 2, y - h / 2 - 3, "—")
    else:
        c.setFillColor(MED_GRAY)
        c.setFont("Helvetica", 6)
        c.drawCentredString(col_x + col_ws[0] / 2, y - h / 2 - 3, "—")

    col_x += col_ws[0]

    # Col 1: product name + SKU
    name = product["name"] if product else item["description"]
    c.setFillColor(DARK)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(col_x + 4, y - 14, name[:40])
    c.setFillColor(MED_GRAY)
    c.setFont("Helvetica", 6.5)
    c.drawString(col_x + 4, y - 24, item["sku"])
    col_x += col_ws[1]

    # Col 2: brand in orange caps
    brand = _get_brand(product, name)
    if brand.lower() in ("amazon", "amazon.com"):
        brand = "Generic"
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(col_x + col_ws[2] / 2, y - h / 2 - 3, brand.upper()[:14])
    col_x += col_ws[2]

    # Col 3: condition pill
    cond = item["condition"]
    pill_bg = DARK if cond == "NEW" else ORANGE
    pw, ph = 36, 12
    draw_pill(c, col_x + (col_ws[3] - pw) / 2, y - h / 2 - ph / 2, pw, ph, cond, pill_bg, WHITE, 6)
    col_x += col_ws[3]

    # Col 4: highlights joined with ·
    bullets = product.get("description", []) if product else []
    highlights = " · ".join(b[:30] for b in bullets[:3])
    c.setFillColor(DARK)
    c.setFont("Helvetica", 6)
    c.drawString(col_x + 4, y - 14, highlights[:55])
    if len(highlights) > 55:
        c.drawString(col_x + 4, y - 23, highlights[55:110])


# ── Shared Drawing Helpers ──────────────────────────────────────────────────

def _draw_hero_block(c, meta, logo_img, preparer, top_y):
    """Draw the dark hero block on page 1. Returns y after block."""
    MARGIN = 0.4 * inch
    content_w = PAGE_W - 2 * MARGIN
    hero_h = 1.55 * inch

    c.setFillColor(DARK)
    c.rect(MARGIN, top_y - hero_h, content_w, hero_h, fill=1, stroke=0)

    logo_h = 0.55 * inch
    draw_logo(c, logo_img, MARGIN + 10, top_y - hero_h + (hero_h - logo_h) / 2, logo_h)

    # Quote number top right
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 9)
    c.drawRightString(MARGIN + content_w - 10, top_y - 16,
                      f"QUOTE {meta.get('quote_number', '')}")
    c.setFillColor(MED_GRAY)
    c.setFont("Helvetica", 7.5)
    c.drawRightString(MARGIN + content_w - 10, top_y - 28,
                      f"{meta.get('date', '')}  ·  Valid 30 days")

    # Headline
    headline_y = top_y - 50
    c.setFillColor(colors.HexColor("#9CA3AF"))
    c.setFont("Helvetica", 8)
    c.drawString(MARGIN + 10, headline_y, "EQUIPMENT REFERENCE  ·  "
                 f"{len(meta.get('line_items', []))} ITEMS")

    # Client name in orange
    client = meta.get("clinic_name") or meta.get("contact_name") or "Client"
    contact = meta.get("contact_name", "")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 16)
    prefix = "Equipment for "
    c.drawString(MARGIN + 10, headline_y - 18, prefix)
    pw = c.stringWidth(prefix, "Helvetica-Bold", 16)
    c.setFillColor(ORANGE)
    c.drawString(MARGIN + 10 + pw, headline_y - 18, client[:35])

    # Subtext
    c.setFillColor(colors.HexColor("#9CA3AF"))
    c.setFont("Helvetica", 7.5)
    c.drawString(MARGIN + 10, headline_y - 32,
                 "Here's the equipment we discussed. Photos and key features for your "
                 "team's review. Pricing is in the separate quote document.")

    # 3-col prepared row
    col_w = content_w / 3
    labels = ["PREPARED FOR", "CLINIC", "PREPARED BY"]
    values = [contact, client, preparer]
    for i, (lbl, val) in enumerate(zip(labels, values)):
        cx = MARGIN + 10 + i * col_w
        cy = top_y - hero_h + 28
        c.setFillColor(colors.HexColor("#6B7280"))
        c.setFont("Helvetica", 6.5)
        c.drawString(cx, cy + 12, lbl)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(cx, cy, val[:30])

    return top_y - hero_h


def _draw_stats_bar(c, matched_items, x, y, w):
    """Draw stats bar. Returns height consumed."""
    bar_h = 0.52 * inch
    c.setFillColor(WHITE)
    c.setStrokeColor(LIGHT_GRAY)
    c.setLineWidth(0.5)
    c.rect(x, y - bar_h, w, bar_h, fill=1, stroke=1)

    total = len(matched_items)
    new_count = sum(1 for i in matched_items if i["condition"] == "NEW")
    pre_count = total - new_count
    brands = len(set(_get_brand(i.get("product"), i.get("description", ""))
                     for i in matched_items))
    cats = len(set(i["product"]["category"] for i in matched_items
                   if i.get("product") and i["product"].get("category")))

    stats = [
        ("TOTAL ITEMS", str(total)),
        ("NEW", str(new_count)),
        ("PRE-OWNED", str(pre_count)),
        ("BRANDS", str(brands)),
        ("CATEGORIES", str(cats)),
    ]

    col_w = w / len(stats)
    for i, (label, value) in enumerate(stats):
        cx = x + i * col_w + col_w / 2
        c.setFillColor(DARK)
        c.setFont("Helvetica-Bold", 16)
        c.drawCentredString(cx, y - bar_h + 20, value)
        c.setFillColor(MED_GRAY)
        c.setFont("Helvetica", 6)
        c.drawCentredString(cx, y - bar_h + 10, label)

    return bar_h + 6


def _draw_secondary_header(c, logo_img, meta):
    """Draw the thin header for pages 2+ (logo left, quote # right, orange bar top)."""
    # Orange top bar
    c.setFillColor(ORANGE)
    c.rect(0, PAGE_H - 6, PAGE_W, 6, fill=1, stroke=0)

    MARGIN = 0.4 * inch
    logo_h = 0.3 * inch
    draw_logo(c, logo_img, MARGIN, PAGE_H - 6 - logo_h - 4, logo_h)

    c.setFillColor(MED_GRAY)
    c.setFont("Helvetica", 7.5)
    c.drawRightString(PAGE_W - MARGIN,
                      PAGE_H - 6 - logo_h / 2 - 3,
                      f"QUOTE {meta.get('quote_number', '')}")


def _get_brand(product, fallback_name=""):
    """Extract brand from product or infer from name."""
    if product and product.get("brand"):
        return product["brand"]
    # Try to infer from name
    name = (product["name"] if product else fallback_name) or ""
    first_word = name.split()[0] if name.split() else "GMTS"
    return first_word


# ── Main ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="GMTS Quote PDF Generator")
    parser.add_argument("estimate_pdf", help="Path to ZohoBooks estimate PDF")
    parser.add_argument("--preparer", default=DEFAULT_PREPARER,
                        help=f"Rep name (default: {DEFAULT_PREPARER})")
    parser.add_argument("--layout", default="auto",
                        choices=["auto", "detailed", "standard", "compact"],
                        help="Layout override (default: auto)")
    parser.add_argument("--output", default=None,
                        help="Output PDF path (default: auto-named)")
    args = parser.parse_args()

    print("Fetching catalog...")
    catalog = fetch_catalog()
    print(f"  {len(catalog)} products loaded.")

    print("Fetching logo...")
    logo_img = fetch_logo()

    print(f"Parsing estimate: {args.estimate_pdf}")
    meta = parse_estimate(args.estimate_pdf)
    print(f"  Quote #{meta['quote_number']}  |  {len(meta['line_items'])} line items")
    print(f"  Client: {meta.get('contact_name')} / {meta.get('clinic_name')}")

    matched = match_products(meta["line_items"], catalog)

    # Determine layout
    n = len(matched)
    if args.layout == "auto":
        if n <= 8:
            layout = "detailed"
        elif n <= 24:
            layout = "standard"
        else:
            layout = "compact"
    else:
        layout = args.layout
    print(f"  Layout: {layout} ({n} items)")

    # Output filename
    if args.output:
        out_path = args.output
    else:
        quote_num = meta.get("quote_number", "XXXX")
        clinic = re.sub(r"[^A-Za-z0-9]+", "_", meta.get("clinic_name", "Client"))[:30]
        out_path = f"GMTS_Quote_{quote_num}_{clinic}.pdf"

    c = canvas.Canvas(out_path, pagesize=letter)
    c.setTitle(f"GM Therapy Solutions — Quote {meta.get('quote_number', '')}")
    c.setAuthor("GM Therapy Solutions")

    meta["line_items"] = matched  # store matched for helpers

    if layout == "detailed":
        build_detailed(c, matched, meta, logo_img, args.preparer)
    elif layout == "standard":
        build_standard(c, matched, meta, logo_img, args.preparer)
    else:
        build_compact(c, matched, meta, logo_img, args.preparer)

    c.save()
    print(f"\n✓ PDF saved: {out_path}")

    # Report unmatched SKUs
    unmatched = [i for i in matched if i["product"] is None and not i.get("image_override")]
    if unmatched:
        print(f"\n⚠ Unmatched SKUs ({len(unmatched)}):")
        for i in unmatched:
            print(f"  - {i['sku']}  ({i['description']})")


if __name__ == "__main__":
    main()
