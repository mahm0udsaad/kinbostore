import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/brand/logo.jpg"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-display text-xl tracking-wide uppercase">
            {siteConfig.shortName}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/collection"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dim"
          >
            Shop Now
          </Link>
        </nav>
        {/* Mobile keeps the header minimal — primary nav lives in the bottom tab bar. */}
        <Link
          href="/collection"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white md:hidden"
        >
          Shop
        </Link>
      </div>
    </header>
  );
}
