"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { companyNav, siteConfig } from "@/lib/site";
import { getAllDivisions } from "@/lib/division";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const divisions = getAllDivisions();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 h-full w-[88%] max-w-[420px] overflow-y-auto bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-mute">Menu</span>
              <button
                type="button"
                aria-label="Sluit menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-md text-ink hover:bg-off-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="px-5 py-6">
              <p className="eyebrow mb-3" style={{ color: "var(--mute)" }}>Divisies</p>
              <ul className="space-y-2">
                {divisions.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/${d.slug}`}
                      onClick={() => setOpen(false)}
                      data-division={d.themeKey}
                      className="group flex items-center justify-between rounded-md bg-accent px-4 py-3 text-white transition-transform hover:translate-x-1"
                    >
                      <span className="font-display text-lg font-bold">{d.name}</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="eyebrow mb-3 mt-8" style={{ color: "var(--mute)" }}>Bedrijf</p>
              <ul className="divide-y divide-line">
                {companyNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 text-ink hover:text-accent"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-4 text-mute" />
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/offerte"
                onClick={() => setOpen(false)}
                className="mt-8 flex items-center justify-center rounded-md bg-ink px-5 py-3.5 font-medium text-white"
              >
                Vraag offerte
              </Link>

              <div className="mt-8 space-y-1 text-sm text-slate">
                <p>{siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}</p>
                <a href={siteConfig.contact.phoneHref} className="block">{siteConfig.contact.phone}</a>
                <a href={`mailto:${siteConfig.contact.email}`} className="block">{siteConfig.contact.email}</a>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex size-10 items-center justify-center rounded-md text-ink hover:bg-off-white lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
