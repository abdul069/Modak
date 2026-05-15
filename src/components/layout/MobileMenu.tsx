"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const clusters = [
  { title: "Dak & gevel", items: [
    { label: "Dakrenovatie", href: "/diensten/dakrenovatie" },
    { label: "Dakisolatie", href: "/diensten/dakisolatie" },
  ]},
  { title: "Interieur", items: [
    { label: "Badkamers", href: "/diensten/badkamers" },
    { label: "Sanitair", href: "/diensten/sanitair" },
    { label: "Keukens", href: "/diensten/keukens" },
    { label: "Vloeren", href: "/diensten/vloeren" },
  ]},
  { title: "Verwarming & koeling", items: [
    { label: "Warmtepompen", href: "/diensten/warmtepompen" },
    { label: "Verwarming", href: "/diensten/verwarming" },
    { label: "Airco", href: "/diensten/airco" },
  ]},
  { title: "Lucht & energie", items: [
    { label: "Ventilatie", href: "/diensten/ventilatie" },
    { label: "Zonnepanelen", href: "/diensten/zonnepanelen" },
  ]},
  { title: "Elektriciteit", items: [
    { label: "Elektriciteitswerken", href: "/diensten/elektriciteitswerken" },
    { label: "Laadpalen", href: "/diensten/laadpalen" },
  ]},
];

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // Close on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex size-10 items-center justify-center text-charcoal lg:hidden"
        aria-label="Menu openen"
      >
        <Menu className="size-5" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-charcoal"
          >
            <div className="container-wide flex h-20 items-center justify-between md:h-24">
              <Logo size="md" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center text-bone"
                aria-label="Menu sluiten"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="container-wide flex h-[calc(100vh-5rem)] flex-col gap-10 overflow-y-auto pb-12 pt-4 md:h-[calc(100vh-6rem)]">
              <nav aria-label="Mobiele navigatie">
                <ul className="space-y-1">
                  {navigation.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-3 font-display text-3xl text-bone transition-colors hover:text-clay md:text-4xl",
                          pathname.startsWith(item.href) && "text-clay"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Service clusters in collapsible */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone/50">
                  Diensten · 13 disciplines
                </p>
                <div className="space-y-6 border-t border-bone/10 pt-6">
                  {clusters.map((cluster) => (
                    <div key={cluster.title}>
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-clay">
                        {cluster.title}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                        {cluster.items.map((it) => (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              className="text-sm text-bone/80 transition-colors hover:text-bone"
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="border-t border-bone/10 pt-6"
              >
                <Button asChild className="w-full" variant="invert">
                  <Link href="/offerte">
                    Vraag een offerte aan
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-5 flex items-center justify-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone/70"
                >
                  {siteConfig.contact.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
