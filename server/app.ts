import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import { contactRouter } from "./routes/contact.ts";
import { sitemapRouter } from "./routes/sitemap.ts";
import { renderRequest } from "./ssr.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createApp() {
  const app = express();

  app.disable("x-powered-by");

  app.use(
    cors({
      origin: false,
      credentials: true,
    }),
  );

  // API
  app.use(express.json({ limit: "1mb" }));
  app.use("/api/contact", contactRouter);
  app.use(sitemapRouter);

  // SSR for everything else
  app.get("*", async (req, res, next) => {
    try {
      const html = await renderRequest(req);
      res.status(200).set({
        "Content-Type": "text/html; charset=utf-8",
      });
      res.send(html);
    } catch (err) {
      next(err);
    }
  });

  // In production we serve the client bundle from vite build output.
  // In development, Vite dev server serves assets (we'll configure that in server/index.ts).
  const clientDist = path.resolve(__dirname, "../dist/client");
  app.use(
    express.static(clientDist, {
      index: false,
      fallthrough: true,
    }),
  );

  // Error handler
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    if (res.headersSent) return next(err);
    res.status(500).send(renderErrorFallback());
  });

  return app;
}

function renderErrorFallback() {
  return `<!doctype html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/></head>
<body style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
  <h1>Server error</h1>
  <p>Something went wrong while rendering this page.</p>
</body></html>`;
}

