// app/robots.ts — noindex en preview
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.NEXT_PUBLIC_ENV === "preview";
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://kisoland.com";

  return {
    rules: isPreview
      ? [{ userAgent: "*", disallow: "/" }]
      : [{ userAgent: "*", allow: "/" }],
    sitemap: isPreview ? undefined : `${site}/sitemap.xml`,
  };
}