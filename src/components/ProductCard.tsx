import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site-config";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-2xl bg-surface"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-base uppercase tracking-wide sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted">
          {product.category} · {product.colours} colours
        </p>
      </div>
    </Link>
  );
}
