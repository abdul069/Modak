import type { Metadata } from "next";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bericht verzonden",
  description: "Bedankt voor je bericht — we reageren binnen één werkdag.",
  path: "/contact/bedankt",
  noIndex: true,
});

export default function ContactSuccessPage() {
  return (
    <FormSuccess
      title="Bedankt voor je bericht."
      body="We hebben het goed ontvangen en reageren binnen één werkdag. Voor dringende vragen kan je ons gerust telefonisch bereiken."
    />
  );
}
