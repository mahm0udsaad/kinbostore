import type { Metadata } from "next";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { instagramLink, siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Get in touch with KINBO Store to place an order.",
};

const channels = [
  {
    name: "WhatsApp",
    detail: "Fastest way to order — send us sizing and colour preferences.",
    href: whatsappLink("Hi KINBO, I'd like to place an order."),
    cta: "Message on WhatsApp",
    Icon: WhatsAppIcon,
  },
  {
    name: "Instagram",
    detail: "DM us or check our latest drops and behind-the-scenes.",
    href: instagramLink(),
    cta: "Open Instagram",
    Icon: InstagramIcon,
  },
  {
    name: "Facebook",
    detail: "Follow our page for announcements and new arrivals.",
    href: siteConfig.facebookUrl,
    cta: "Open Facebook",
    Icon: FacebookIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
      <h1 className="font-display text-4xl uppercase tracking-wide sm:text-5xl">
        Order &amp; Contact
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        KINBO doesn&apos;t run a checkout — every order is confirmed directly
        with our team so we get sizing and delivery right.
      </p>

      <div className="mt-10 space-y-4">
        {channels.map(({ name, detail, href, cta, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-2">
              <Icon className="h-6 w-6" />
            </span>
            <span className="min-w-0">
              <span className="font-display block text-lg uppercase tracking-wide">
                {name}
              </span>
              <span className="mt-0.5 block text-sm text-muted">{detail}</span>
              <span className="mt-1.5 block text-sm font-semibold text-accent">
                {cta} →
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-8 text-sm text-muted">
        Prefer email?{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
