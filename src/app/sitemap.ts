import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Add an entry here for every route as it's built (shop, wholesale, about, etc.) — only "/" exists today.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
