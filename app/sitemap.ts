// app/sitemap.ts — sitemap básico
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const isPreview = process.env.NEXT_PUBLIC_ENV === "preview";
  if (isPreview) return [];

  const site = (process.env.NEXT_PUBLIC_SITE_URL || "https://kisoland.com").replace(/\/$/, "");
  const now = new Date();

  const routes = [
    "",
    "kisolab",
    "focus-penalty",
    "indumentaria",
    "mundo-kiso",
    "coleccion-del-orbe-sagrado",
    "quienes-somos",
    "carlos-alberto-plata",
    "competidor-integral",
    "privacidad",
    "terminos",
  ];

  return routes.map((path) => ({
    url: path ? `${site}/${path}` : site,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}