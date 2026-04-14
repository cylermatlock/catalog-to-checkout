import { type Product } from "@/data/products";
import { Phone } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
        <div className="text-muted-foreground text-4xl font-bold opacity-20">
          GMTS
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">
          {product.subcategory}
        </span>
        <h3 className="font-semibold text-foreground mt-1 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">SKU: {product.sku}</p>

        <ul className="mt-3 space-y-1">
          {product.description.slice(0, 3).map((item, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
              <span className="text-primary mt-0.5">•</span>
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
          {product.description.length > 3 && (
            <li className="text-xs text-muted-foreground">
              +{product.description.length - 3} more features
            </li>
          )}
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
