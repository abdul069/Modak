"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { navigation, siteConfig } from "@/lib/site";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b backdrop-blur transition-all duration-300",
        scrolled
          ? "border-brand-line/80 bg-brand-bg/90 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "border-transparent bg-brand-bg/60"
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between gap-6 transition-all duration-300",
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        )}
      >
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="group inline-flex items-center transition-opacity hover:opacity-90"
        >
          <Logo className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-brand-ink transition-colors hover:text-brand-primary
                         after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full
                         after:origin-left after:scale-x-0 after:bg-brand-primary
                         after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/offerte">
              Vraag offerte
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
