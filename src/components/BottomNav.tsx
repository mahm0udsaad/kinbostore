"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Shirt, Info } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site-config";

const tabs = [
  { href: "/", label: "Home", icon: House },
  { href: "/collection", label: "Shop", icon: Shirt },
  { href: "/about", label: "About", icon: Info },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 backdrop-blur pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="grid h-16 grid-cols-4">
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-medium ${
                active ? "text-foreground" : "text-muted"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${active ? "stroke-[2.25]" : ""}`}
                aria-hidden="true"
              />
              {tab.label}
              <span
                className={`h-0.5 w-6 rounded-full ${
                  active ? "bg-accent" : "bg-transparent"
                }`}
              />
            </Link>
          );
        })}
        <a
          href={whatsappLink("Hi KINBO, I'd like to place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-medium text-muted"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Order
          <span className="h-0.5 w-6" />
        </a>
      </div>
    </nav>
  );
}
