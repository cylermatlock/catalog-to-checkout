import { type Product } from "@/data/products";
import { productImages } from "@/data/productImages";
import { Phone } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const image = productImages[product.id];

  return (
    <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow group border-4 border-solid border-primary">
      <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-contain p-2"
            loading="lazy"
          />
        ) : (
          <div className="text-muted-foreground text-4xl font-bold opacity-20">
            GMTS
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="font-medium text-primary uppercase tracking-wide text-sm">
          {product.subcategory}
        </span>
        <h3 className="font-semibold mt-1 text-sm leading-tight line-clamp-2 min-h-[2.5rem] text-secondary-foreground bg-[#ff7300]">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">SKU: {product.sku}</p>
        {import.meta.env.DEV && (
          <p className="text-[10px] font-mono text-primary/70 mt-0.5">ID: {product.id}</p>
        )}

        <ul className="mt-3 space-y-1">
          {product.description.map((item, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
              <span className="text-primary mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-3 border-t border-border">
          {product.price ? (
            <p className="text-lg font-bold text-foreground">
              ${product.price.toLocaleString()}
            </p>
          ) : (
            <a
              href="tel:940-600-1311"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              Call for Pricing
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
