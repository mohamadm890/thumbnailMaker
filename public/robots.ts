import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://vizthumb.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/pricing",

        ],
        disallow: [
          "/generate",
          "/api/",
          "/dashboard",
          "/settings",
           "/sign-in",
          "/sign-up",     
        ],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
