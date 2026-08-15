import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

type PageEntry = {
  route: string;
  lastModified: Date;
};

/** Recorre `src/app` y recoge todas las rutas con `page.*` */
function collectPages(dir: string, urlPath = ""): PageEntry[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const pages: PageEntry[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;

    const fullPath = path.join(dir, entry.name);

    // Route groups `(nombre)` — no forman parte de la URL
    if (entry.isDirectory() && /^\(.*\)$/.test(entry.name)) {
      pages.push(...collectPages(fullPath, urlPath));
      continue;
    }

    if (entry.isDirectory()) {
      // Segmentos dinámicos / paralelos: se omiten (no hay URLs concretas)
      if (
        entry.name.startsWith("[") ||
        entry.name.startsWith("@") ||
        entry.name === "api"
      ) {
        continue;
      }
      pages.push(...collectPages(fullPath, `${urlPath}/${entry.name}`));
      continue;
    }

    if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      pages.push({
        route: urlPath || "/",
        lastModified: statSync(fullPath).mtime,
      });
    }
  }

  return pages;
}

function priorityFor(route: string): number {
  if (route === "/") return 1;
  const depth = route.split("/").filter(Boolean).length;
  if (depth === 1) return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "src", "app");
  const pages = collectPages(appDir);

  return pages
    .sort((a, b) => a.route.localeCompare(b.route))
    .map(({ route, lastModified }) => ({
      url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: priorityFor(route),
    }));
}
