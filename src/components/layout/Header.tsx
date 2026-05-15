"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);
  const pathname = usePathname() ?? "";

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      // Hide on scroll-down after 200px, show on scroll-up
      if (y > 200) {
        setHidden(y > lastY.current);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-500",
        scrolled
          ? "border-b border-linen bg-bone/95 backdrop-blur"
          : "border-b border-transparent bg-bone/0",
        hidden && "-translate-y-full"
      )}
    >
      <div
        className={cn(
          "container-wide flex items-center justify-between gap-6 transition-all duration-500",
          scrolled ? "h-16 md:h-20" : "h-20 md:h-24"
        )}
      >
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="group inline-flex items-center transition-opacity hover:opacity-90"
          data-cursor="Home"
        >
          <Logo
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
            size={scrolled ? "md" : "lg"}
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {navigation.map((item) =>
            item.label === "Diensten" ? (
              <MegaMenu key={item.href} label={item.label} href={item.href} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-mono text-[0.7rem] uppercase tracking-[0.22em] text-charcoal transition-colors hover:text-clay-dark",
                  "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-clay after:transition-transform after:duration-300 hover:after:scale-x-100",
                  pathname.startsWith(item.href) && "text-clay-dark after:scale-x-100"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-clay-dark md:inline-flex"
            data-cursor="Bel ons"
          >
            <Phone className="size-3.5" />
            {siteConfig.contact.phone}
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/offerte">
              Vraag offerte
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
