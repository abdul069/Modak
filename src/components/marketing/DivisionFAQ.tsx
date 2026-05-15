"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import type { Division } from "@/content/divisions";

export function DivisionFAQ({ division }: { division: Division }) {
  return (
    <section className="py-20 md:py-28">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Veelgestelde vragen"
          title={`Wat u vaak vraagt over ${division.shortName.toLowerCase()}.`}
        />

        <Accordion.Root type="single" collapsible className="mt-10 divide-y divide-line border-y border-line">
          {division.faq.map((item, i) => (
            <Accordion.Item key={item.q} value={`item-${i}`}>
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-semibold text-ink transition hover:text-accent">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-mute transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-accent" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-slate data-[state=closed]:animate-[accordion-up_0.2s_ease] data-[state=open]:animate-[accordion-down_0.25s_ease]">
                <p className="pb-5 pr-12">{item.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>

      <style>{`
        @keyframes accordion-down { from { height: 0 } to { height: var(--radix-accordion-content-height) } }
        @keyframes accordion-up   { from { height: var(--radix-accordion-content-height) } to { height: 0 } }
      `}</style>
    </section>
  );
}
