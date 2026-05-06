import { z } from "zod";

const allowedFileTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/heic",
];
const maxFileSize = 10 * 1024 * 1024; // 10 MB

const fileSchema = z
  .custom<File>((v) => v instanceof File, "Bestand niet herkend")
  .refine(
    (file) => file.size <= maxFileSize,
    "Bestand mag maximaal 10 MB groot zijn."
  )
  .refine(
    (file) => allowedFileTypes.includes(file.type),
    "Bestand moet PDF, JPG, PNG of HEIC zijn."
  );

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Vul je naam in.")
    .max(120, "Naam is te lang.")
    .trim(),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  phone: z
    .string()
    .trim()
    .max(40, "Telefoonnummer is te lang.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Schrijf een bericht van minstens 10 tekens.")
    .max(4000, "Bericht is te lang."),
  // honeypot: must be empty
  website: z.string().max(0, "Spam gedetecteerd.").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  services: z
    .array(z.string().min(1))
    .min(1, "Kies minstens één dienst."),
  situation: z.enum(["nieuwbouw", "renovatie", "verbouwing"], {
    message: "Kies één situatie.",
  }),
  propertyType: z.enum(
    ["rijwoning", "halfopen", "vrijstaand", "appartement", "ander"],
    { message: "Kies een type woning." }
  ),
  name: z.string().min(2).max(120).trim(),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  city: z.string().trim().max(120).optional().or(z.literal("")),
  notes: z.string().max(4000).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export { fileSchema };
