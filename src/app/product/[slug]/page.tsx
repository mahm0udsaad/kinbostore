import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/icons";
import {
  getProduct,
  products,
  siteConfig,
  whatsappLink,
} from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${siteConfig.name}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const orderHref = whatsappLink(
    `Hi KINBO, I'd like to order the ${product.name} (${product.category}).`
  );
  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-12">
      <Link
        href="/collection"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Collection
      </Link>

      <div className="mt-5 grid gap-8 lg:grid-cols-2 lg:gap-14">
        <ProductGallery images={product.images} name={product.name} />

        <div className="lg:pt-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {product.category}
          </p>
          <h1 className="font-display mt-2 text-3xl uppercase tracking-wide sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-md text-muted">{product.description}</p>
          <p className="mt-3 text-sm text-muted">
            Available in{" "}
            <span className="font-semibold text-foreground">
              {product.colours} colours
            </span>{" "}
            — see the photos for the full range.
          </p>

          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 hidden w-full max-w-sm items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dim sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order on WhatsApp
          </a>

          <div className="mt-8 space-y-2 border-t border-border pt-6 text-sm text-muted">
            <p>· Message us with your size and colour — we confirm instantly.</p>
            <p>· Delivery arranged directly on WhatsApp.</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 sm:mt-28">
          <h2 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
            You may also like
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Sticky order bar — mobile only, sits above the bottom tab bar. */}
      <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-40 border-t border-border bg-background/90 p-3 backdrop-blur sm:hidden">
        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Order {product.name} on WhatsApp
        </a>
      </div>
      {/* Spacer so page content isn't hidden behind the sticky bar. */}
      <div className="h-20 sm:hidden" />
    </div>
  );
}
