"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { companyNav, siteConfig } from "@/lib/site";
import { apexUrl } from "@/lib/subdomain";
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
        "sticky top-0 z-40 w-full backdrop-blur transition-all duration-300",
        scrolled
          ? "border-b border-line bg-white/95 shadow-[0_1px_0_0_rgba(15,19,32,0.04)]"
          : "border-b border-transparent bg-white/80",
      )}
    >
      <Container className={cn("flex items-center justify-between gap-6 transition-all duration-300", scrolled ? "h-14 md:h-16" : "h-16 md:h-20")}>
        <Link
          href={apexUrl()}
          aria-label={`Terug naar ${siteConfig.name} portal`}
          className="group inline-flex items-center transition-opacity hover:opacity-90"
        >
          <Logo className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hoofdnavigatie">
          {companyNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-ink transition-colors hover:text-accent
                         after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full
                         after:origin-left after:scale-x-0 after:bg-accent
                         after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="ink" className="hidden md:inline-flex">
            <Link href="/offerte">
              Vraag offerte
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
