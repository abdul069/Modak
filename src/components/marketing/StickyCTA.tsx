"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HIDE_ON = ["/offerte", "/contact"];

export function StickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = HIDE_ON.some((p) => pathname?.startsWith(p));
  if (hidden) return null;

  return (
    <Link
      href="/offerte"
      aria-label="Vraag offerte aan"
      className={cn(
        "group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-brand-bg-dark px-5 py-3 text-sm font-semibold text-white shadow-xl ring-1 ring-white/10 transition-all duration-300 hover:bg-brand-primary",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      Vraag offerte
      <span className="grid size-7 place-items-center rounded-full bg-brand-accent text-brand-ink transition-transform group-hover:translate-x-0.5">
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
