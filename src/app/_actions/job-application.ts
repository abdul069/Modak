"use server";

import { redirect } from "next/navigation";
import { jobApplicationSchema } from "./schemas";

type Result = { ok: false; errors: Record<string, string> } | { ok: true };

export async function submitJobApplication(
  _: Result | null,
  formData: FormData,
): Promise<Result> {
  const raw: Record<string, string> = {};
  formData.forEach((v, k) => {
    if (typeof v === "string") raw[k] = v;
  });

  const parsed = jobApplicationSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? "form";
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors };
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[job]", parsed.data);
  }

  redirect("/jobs?ok=1");
}
