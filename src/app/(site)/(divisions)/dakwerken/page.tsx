import type { Metadata } from "next";
import { DivisionPage } from "../_components/DivisionPage";
import { divisions } from "@/content/divisions";
import { buildMetadata } from "@/lib/seo";

const division = divisions.dakwerken;

export const metadata: Metadata = buildMetadata({
  title: division.meta.title,
  description: division.meta.description,
  path: `/${division.slug}`,
});

export default function Page() {
  return <DivisionPage division={division} />;
}
