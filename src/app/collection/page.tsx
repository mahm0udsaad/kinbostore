import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { productsByCategory, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Collection — ${siteConfig.name}`,
  description:
    "Browse the current KINBO Store drop — tees and sets, ordered directly via WhatsApp.",
};

export default function CollectionPage() {
  const sections = [
    { id: "t-shirts", title: "T Shirts", items: productsByCategory("T Shirts") },
    { id: "sets", title: "Sets", items: productsByCategory("Sets") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
      <h1 className="font-display text-4xl uppercase tracking-wide sm:text-5xl">
        Collection
      </h1>

      {/* Category quick-jump pills */}
      <nav className="mt-6 flex gap-2" aria-label="Categories">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mt-12 scroll-mt-24 sm:mt-16"
        >
          <div className="flex items-baseline gap-3">
            <h2 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
              {section.title}
            </h2>
            <span className="text-sm text-muted">
              {section.items.length}{" "}
              {section.items.length === 1 ? "piece" : "pieces"}
            </span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {section.items.map((product, i) => (
              <ProductCard key={product.slug} product={product} priority={i < 2} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
