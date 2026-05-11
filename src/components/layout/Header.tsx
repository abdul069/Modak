"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { navigation, services, siteConfig } from "@/lib/site";
import { MobileNav } from "@/components/layout/MobileNav";
import { resolveIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname() ?? "";
  const showServiceNav = pathname === "/" || pathname.startsWith("/diensten");

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

      {showServiceNav ? (
        <div className="hidden border-t border-brand-line/40 bg-white lg:block">
          <nav
            className="container-page flex items-center gap-6 overflow-x-auto py-2.5"
            aria-label="Diensten"
          >
            {services.map((service) => {
              const Icon = resolveIcon(service.icon);
              return (
                <Link
                  key={service.slug}
                  href={`/diensten/${service.slug}`}
                  className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-brand-ink-soft transition-colors hover:text-brand-primary"
                >
                  <Icon className="size-3.5 transition-colors group-hover:text-brand-primary" />
                  {service.title}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
