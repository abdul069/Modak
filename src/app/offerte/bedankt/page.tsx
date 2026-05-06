import type { Metadata } from "next";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Offerte aangevraagd",
  description:
    "Bedankt voor je offerteaanvraag — we nemen binnen 1-2 werkdagen contact op.",
  path: "/offerte/bedankt",
  noIndex: true,
});

export default function OfferteSuccessPage() {
  return (
    <FormSuccess
      title="Offerteaanvraag verzonden."
      body="We hebben alle informatie ontvangen en nemen binnen 1-2 werkdagen contact op om een plaatsbezoek te plannen of om eerst telefonisch door te lopen wat we precies kunnen betekenen."
    />
  );
}
