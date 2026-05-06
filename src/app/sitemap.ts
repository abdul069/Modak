import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  getAllBlogPosts,
  getAllProjects,
  getAllServices,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/diensten",
    "/totaalrenovatie",
    "/realisaties",
    "/over-ons",
    "/voor-aannemers",
    "/blog",
    "/contact",
    "/offerte",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const services: MetadataRoute.Sitemap = getAllServices().map((s) => ({
    url: `${base}/diensten/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projects: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${base}/realisaties/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const blog: MetadataRoute.Sitemap = getAllBlogPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.frontmatter.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...services, ...projects, ...blog];
}
