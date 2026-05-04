import { useState } from "react";
import { Link } from "react-router-dom";
import { type Product } from "@/data/products";
import { productImages } from "@/data/productImages";
import { hasDetailPage } from "@/data/productDetails";
import { getBrand } from "@/lib/brand";
import { Phone, Plus, Minus, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const image = productImages[product.id];
  const { addItem, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const showDetails = hasDetailPage(product.id);

  const ViewDetailsLink = showDetails ? (
    <Button asChild variant="outline" size="sm" className="w-full mt-2 font-semibold">
      <Link to={`/product/${product.id}`}>
        <Eye className="w-4 h-4 mr-1.5" />
        More Details
      </Link>
    </Button>
  ) : null;

  const renderImage = (className: string) => {
    if (!image) {
      return (
        <div className="text-muted-foreground text-4xl font-bold opacity-20">
          GMTS
        </div>
      );
    }
    const img = (
      <img
        src={image}
        alt={`${getBrand(product)} ${product.name} — ${product.subcategory} (SKU ${product.sku})`}
        className={className}
        loading={featured ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={featured ? "high" : "auto"}
      />
    );
    if (showDetails) {
      return (
        <Link
          to={`/product/${product.id}`}
          className="w-full h-full flex items-center justify-center cursor-pointer"
          aria-label={`View details for ${product.name}`}
        >
          {img}
        </Link>
      );
    }
    return img;
  };

  const handleAdd = () => {
    addItem(product, qty);
    toast.success(`${qty} × ${product.name} added to quote request`, {
      action: { label: "View quote request", onClick: openCart },
    });
    setQty(1);
  };

  const QuantityAndAdd = (
    <div className="flex items-center gap-2 mt-3">
      <div className="flex items-center border border-border rounded-md">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-2 py-1.5 hover:bg-secondary transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-8 text-center text-sm font-semibold">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          className="px-2 py-1.5 hover:bg-secondary transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
      <Button
        onClick={handleAdd}
        size="sm"
        className="flex-1 font-semibold"
      >
        <ShoppingCart className="w-4 h-4 mr-1.5" />
        Add to Quote Request
      </Button>
    </div>
  );

  if (featured) {
    return (
      <div className="group bg-card rounded-lg overflow-hidden border-[3px] border-foreground shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-background flex items-center justify-center overflow-hidden relative">
          {renderImage("w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105")}
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            {product.subcategory}
          </span>
          {product.bsw && (
            <span
              className="absolute top-3 right-3 bg-foreground text-background text-[10px] font-bold tracking-wider px-2 py-1 rounded shadow-md"
              title="Previously purchased by Baylor Scott & White"
            >
              BSW
            </span>
          )}
        </div>

        <div className="bg-primary px-4 py-3">
          <h3 className="font-display text-base font-bold uppercase tracking-tight text-primary-foreground leading-tight line-clamp-2 min-h-[2.75rem]">
            {product.name}
          </h3>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
          <p className="text-[10px] font-mono text-primary/70 mt-0.5">ID: {product.id}</p>

          <ul className="mt-3 space-y-1 flex-1">
            {product.description.map((item, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                <span className="text-primary mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-3 border-t border-border">
            {product.price && (
              <p className="font-display text-2xl font-bold text-foreground mb-2">
                ${product.price.toLocaleString()}
              </p>
            )}
            {QuantityAndAdd}
            {ViewDetailsLink}
            {!product.price && (
              <a
                href="tel:940-334-5169"
                className="mt-2 flex items-center justify-center gap-2 w-full text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-3 h-3" />
                Or call for pricing
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow group border-4 border-solid border-primary">
      <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden relative">
        {renderImage("w-full h-full object-contain p-2")}
        {product.bsw && (
          <span
            className="absolute top-3 right-3 bg-foreground text-background text-[10px] font-bold tracking-wider px-2 py-1 rounded shadow-md"
            title="Previously purchased by Baylor Scott & White"
          >
            BSW
          </span>
        )}
      </div>
      <div className="p-4">
        <span className="font-medium text-primary uppercase tracking-wide text-sm">
          {product.subcategory}
        </span>
        <h3 className="font-semibold mt-1 text-sm leading-tight line-clamp-2 min-h-[2.5rem] text-primary-foreground bg-primary">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">SKU: {product.sku}</p>
        <p className="text-[10px] font-mono text-primary/70 mt-0.5">ID: {product.id}</p>

        <ul className="mt-3 space-y-1">
          {product.description.map((item, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
              <span className="text-primary mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-3 border-t border-border">
          {product.price && (
            <p className="text-lg font-bold text-foreground mb-2">
              ${product.price.toLocaleString()}
            </p>
          )}
          {QuantityAndAdd}
          {ViewDetailsLink}
          {!product.price && (
            <a
              href="tel:940-334-5169"
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
            >
              <Phone className="w-3 h-3" />
              Or call for pricing
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
