import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, siteConfig } from "@/lib/site-config";

const categoryTiles = [
  {
    href: "/collection#t-shirts",
    label: "T Shirts",
    image: "/images/products/bad-intentions-tee.jpg",
  },
  {
    href: "/collection#sets",
    label: "Sets",
    image: "/images/products/linen-set-front.png",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero — the banner is the star; copy stays out of its way. */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden sm:min-h-[85vh]">
        <Image
          src="/images/brand/banner.jpg"
          alt={siteConfig.name}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            金宝 · Kinbo Store
          </p>
          <h1 className="font-display mt-3 max-w-xl text-4xl uppercase leading-[1.05] tracking-wide sm:text-6xl">
            {siteConfig.tagline}
          </h1>
          <Link
            href="/collection"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dim"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Category tiles — two big tappable images. */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-28">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[4/3]"
            >
              <Image
                src={tile.image}
                alt={tile.label}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:p-6">
                <span className="font-display text-xl uppercase tracking-wide text-white sm:text-2xl">
                  {tile.label}
                </span>
                <ArrowRight
                  className="h-5 w-5 text-white transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest drop — horizontal snap strip on mobile, grid on desktop. */}
      <section className="pb-16 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
              Latest Drop
            </h2>
            <Link
              href="/collection"
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:text-foreground"
            >
              View all
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:mx-auto sm:grid sm:max-w-6xl sm:grid-cols-3 sm:gap-6 sm:px-8 lg:grid-cols-5">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group w-[70vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl bg-surface sm:w-auto sm:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, 70vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display truncate text-base uppercase tracking-wide">
                  {product.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted">
                  {product.category} · {product.colours} colours
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
