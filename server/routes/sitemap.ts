import express from "express";

export const sitemapRouter = express.Router();

const BASE_URL = "";

sitemapRouter.get("/sitemap.xml", (_req, res) => {
  const entries = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
  const urls = entries
    .map(
      (e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    )
    .join("\n");

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    urls,
    `</urlset>`,
  ].join("\n");

  res.status(200);
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.send(xml);
});

