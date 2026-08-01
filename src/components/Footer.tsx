import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { instagramLink, siteConfig, whatsappLink } from "@/lib/site-config";

const socials = [
  {
    name: "WhatsApp",
    href: whatsappLink("Hi KINBO, I'd like to place an order."),
    Icon: WhatsAppIcon,
  },
  { name: "Instagram", href: instagramLink(), Icon: InstagramIcon },
  { name: "Facebook", href: siteConfig.facebookUrl, Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <div>
            <div className="font-display text-xl uppercase tracking-wide">
              {siteConfig.shortName}
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
          <nav className="flex gap-5">
            <Link href="/collection" className="hover:text-foreground">
              Collection
            </Link>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
