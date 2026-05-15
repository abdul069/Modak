"use server";

import { redirect } from "next/navigation";
import { contactSchema } from "./schemas";

type Result = { ok: false; errors: Record<string, string> } | { ok: true };

export async function submitContact(_: Result | null, formData: FormData): Promise<Result> {
  const raw: Record<string, string> = {};
  formData.forEach((v, k) => {
    if (typeof v === "string") raw[k] = v;
  });

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? "form";
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors };
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[contact]", parsed.data);
  }

  redirect("/contact?ok=1");
}
