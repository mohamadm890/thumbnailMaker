import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vizthumb.com",
      lastModified: new Date(),
    },
  ];
}
