import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-line/60 bg-brand-bg/85 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/70">
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2 font-display text-xl tracking-tight text-brand-primary"
        >
          <Logo />
          <span className="font-display text-2xl">AGNAU</span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-brand-ink transition-colors hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/offerte">
              Vraag offerte
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span
      aria-hidden
      className="grid size-9 place-items-center rounded-md bg-brand-primary text-sm font-semibold text-white"
    >
      M
    </span>
  );
}
