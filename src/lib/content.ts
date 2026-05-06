import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readDir(dir: string): string[] {
  const full = path.join(CONTENT_ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

function readFile<T>(dir: string, file: string) {
  const raw = fs.readFileSync(path.join(CONTENT_ROOT, dir, file), "utf8");
  const parsed = matter(raw);
  return {
    frontmatter: parsed.data as T,
    content: parsed.content,
    slug: file.replace(/\.mdx?$/, ""),
  };
}

export interface ServiceFrontmatter {
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  hasPremies?: boolean;
  certificates?: string[];
  seoTitle?: string;
  seoDescription?: string;
  intro?: string;
  steps?: { title: string; body: string }[];
  scope?: string[];
  faqs?: { q: string; a: string }[];
  relatedServices?: string[];
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  location: string;
  year: number;
  duration?: string;
  type?: string;
  services: string[];
  heroImage?: string;
  gallery?: string[];
  quote?: { text: string; author: string };
  featured?: boolean;
  excerpt?: string;
}

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author?: string;
  cover?: string;
  tags?: string[];
}

export function getAllServices() {
  return readDir("services")
    .map((file) => readFile<ServiceFrontmatter>("services", file))
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
}

export function getServiceBySlug(slug: string) {
  const files = readDir("services");
  const match = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!match) return null;
  return readFile<ServiceFrontmatter>("services", match);
}

export function getAllProjects() {
  return readDir("projects")
    .map((file) => readFile<ProjectFrontmatter>("projects", file))
    .sort((a, b) => (b.frontmatter.year ?? 0) - (a.frontmatter.year ?? 0));
}

export function getProjectBySlug(slug: string) {
  const files = readDir("projects");
  const match = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!match) return null;
  return readFile<ProjectFrontmatter>("projects", match);
}

export function getAllBlogPosts() {
  return readDir("blog")
    .map((file) => readFile<BlogFrontmatter>("blog", file))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getBlogPostBySlug(slug: string) {
  const files = readDir("blog");
  const match = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!match) return null;
  return readFile<BlogFrontmatter>("blog", match);
}

export function getPage(name: string) {
  const file = readDir("pages").find(
    (f) => f.replace(/\.mdx?$/, "") === name
  );
  if (!file) return null;
  return readFile<Record<string, unknown>>("pages", file);
}
