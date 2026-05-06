"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="lg:hidden"
        >
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-8">
        <Logo />

        <nav
          className="flex flex-col gap-1"
          aria-label="Mobiele hoofdnavigatie"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-lg font-medium text-brand-ink transition-colors hover:bg-brand-primary/5 hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2">
          <Button asChild>
            <Link href="/offerte" onClick={() => setOpen(false)}>
              Vraag offerte aan
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href={siteConfig.contact.phoneHref}
              onClick={() => setOpen(false)}
            >
              Bel ons
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
