import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllDivisions } from "@/lib/division";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/over-ons",
    "/realisaties",
    "/jobs",
    "/premies",
    "/blog",
    "/contact",
    "/offerte",
    "/privacy",
    "/algemene-voorwaarden",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/privacy" || path === "/algemene-voorwaarden" ? 0.3 : 0.7,
  }));

  const divisions: MetadataRoute.Sitemap = getAllDivisions().map((d) => ({
    url: `${base}/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...divisions];
}
