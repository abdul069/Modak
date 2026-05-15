import { z } from "zod";
import { DIVISION_SLUGS } from "@/content/divisions";

export const quoteSchema = z
  .object({
    division: z.enum(DIVISION_SLUGS),
    naam: z.string().min(2, "Naam is te kort").max(120),
    email: z.string().email("Geen geldig e-mailadres"),
    telefoon: z.string().min(6, "Geen geldig telefoonnummer").max(40),
    postcode: z.string().min(4).max(10),
    opmerkingen: z.string().max(2000).optional(),
    // honeypot
    company: z.string().max(0).optional(),
  })
  .passthrough();

export type QuoteInput = z.infer<typeof quoteSchema>;

export const contactSchema = z.object({
  naam: z.string().min(2).max(120),
  email: z.string().email(),
  telefoon: z.string().min(6).max(40).optional(),
  bericht: z.string().min(10).max(4000),
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const jobApplicationSchema = z.object({
  vacature: z.string().min(1).max(200),
  naam: z.string().min(2).max(120),
  email: z.string().email(),
  telefoon: z.string().min(6).max(40),
  motivatie: z.string().min(10).max(4000),
  company: z.string().max(0).optional(),
});

export type JobApplicationInput = z.infer<typeof jobApplicationSchema>;
