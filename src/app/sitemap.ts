import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllDivisions } from "@/lib/division";
import { projects } from "@/content/realisaties";
import { blogPosts } from "@/content/blog";
import { jobs } from "@/content/jobs";

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
    priority:
      path === ""
        ? 1
        : path === "/privacy" || path === "/algemene-voorwaarden"
          ? 0.3
          : 0.7,
  }));

  const divisions: MetadataRoute.Sitemap = getAllDivisions().map((d) => ({
    url: `${base}/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/realisaties/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const jobRoutes: MetadataRoute.Sitemap = jobs.map((j) => ({
    url: `${base}/jobs/${j.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...divisions,
    ...projectRoutes,
    ...blogRoutes,
    ...jobRoutes,
  ];
}
