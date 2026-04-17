import { type Product } from "@/data/products";
import { productImages } from "@/data/productImages";
import { Phone } from "lucide-react";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const image = productImages[product.id];

  if (featured) {
    return (
      <div className="group bg-card rounded-lg overflow-hidden border border-border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-background flex items-center justify-center overflow-hidden relative">
          {image ? (
            <img
              src={image}
              alt={product.name}
              className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="text-muted-foreground text-4xl font-bold opacity-20">
              GMTS
            </div>
          )}
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            {product.subcategory}
          </span>
        </div>

        <div className="bg-primary px-4 py-3">
          <h3 className="font-display text-base font-bold uppercase tracking-tight text-primary-foreground leading-tight line-clamp-2 min-h-[2.75rem]">
            {product.name}
          </h3>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
          {import.meta.env.DEV && (
            <p className="text-[10px] font-mono text-primary/70 mt-0.5">ID: {product.id}</p>
          )}

          <ul className="mt-3 space-y-1 flex-1">
            {product.description.map((item, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                <span className="text-primary mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-3 border-t border-border">
            {product.price ? (
              <p className="font-display text-2xl font-bold text-foreground">
                ${product.price.toLocaleString()}
              </p>
            ) : (
              <a
                href="tel:940-600-1311"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold text-sm py-2.5 rounded-md"
              >
                <Phone className="w-4 h-4" />
                Call for Pricing
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

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
        <h3 className="font-semibold mt-1 text-sm leading-tight line-clamp-2 min-h-[2.5rem] text-primary-foreground bg-primary">
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
