import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: "The story behind KINBO Store.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex h-[50vh] min-h-[360px] items-end overflow-hidden border-b border-border">
        <Image
          src="/images/brand/showroom.jpg"
          alt="KINBO Store"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            金宝
          </p>
          <h1 className="font-display mt-2 text-4xl uppercase tracking-wide sm:text-5xl">
            About KINBO
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="space-y-6 text-lg leading-relaxed text-muted">
          <p>
            KINBO (金宝) — &ldquo;golden treasure&rdquo; — is a streetwear
            store bringing oversized tees and sets to anyone who wants a bold,
            statement-driven wardrobe.
          </p>
          <p>
            Our catalogue is still growing — new tees and sets are added as
            they&apos;re ready. Message us directly on WhatsApp or Instagram
            to check current stock, sizing and delivery.
          </p>
        </div>
      </section>
    </div>
  );
}
