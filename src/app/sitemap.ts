import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tecnosencillo.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/blog", priority: 0.9 },
    { path: "/categorias", priority: 0.8 },
    { path: "/sobre-nosotros", priority: 0.6 },
    { path: "/contacto", priority: 0.5 },
    { path: "/privacidad", priority: 0.3 },
    { path: "/cookies", priority: 0.3 },
    { path: "/terminos", priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    changeFrequency: page.path === "" ? "weekly" : "monthly",
    priority: page.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updated || article.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...articleEntries];
}