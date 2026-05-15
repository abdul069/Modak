import type { Metadata } from "next";
import { DivisionPage } from "../_components/DivisionPage";
import { divisions } from "@/content/divisions";
import { buildMetadata } from "@/lib/seo";
import { divisionUrl } from "@/lib/subdomain";

const division = divisions["zonne-energie"];

export const metadata: Metadata = buildMetadata({
  title: division.meta.title,
  description: division.meta.description,
  canonical: divisionUrl(division.slug),
});

export default function Page() {
  return <DivisionPage division={division} />;
}
