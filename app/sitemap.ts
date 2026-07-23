import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Generates /sitemap.xml automatically. Add more entries here if you split the
// site into multiple routes (e.g. dedicated case-study pages).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
