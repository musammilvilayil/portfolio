import { createServer as createViteServer } from "vite";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { createApp } from "./app";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "0.0.0.0";

async function main() {
  const app = createApp();

  const isProd = process.env.NODE_ENV === "production";

  // Development: create Vite dev server in middleware mode.
  let vite: any;
  if (!isProd) {
    vite = await createViteServer({
      server: {
        middlewareMode: "ssr",
        watch: {
          // better defaults for some containerized FS
          usePolling: true,
        },
      },
      appType: "custom",
    });

    app.use(vite.middlewares);
  }

  // Expose vite for ssr layer via global (simple & contained).
  // server/ssr.ts will import it lazily.
  (globalThis as any).__VITE__ = vite;
  (globalThis as any).__IS_PROD__ = isProd;
  (globalThis as any).__CLIENT_DIST__ = path.resolve(__dirname, "../dist/client");

  app.listen(port, host, () => {
    console.log(`[express+ssr] Listening on http://${host}:${port}`);
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

