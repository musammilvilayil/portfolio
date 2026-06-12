import React from "react";
import { renderToString } from "react-dom/server";
import type { Request } from "express";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { getRouter } from "../src/router";

const HTML_SHELL = (body: string) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Portfolio</title>
</head>
<body>
  <div id="root">${body}</div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;

export async function renderRequest(req: Request) {
  const url = new URL(req.originalUrl ?? req.url, `http://${req.headers.host ?? "localhost"}`);

  const router = getRouter();

  // Best-effort routing setup for SSR.
  await router.update({
    // @ts-expect-error tanstack internal typing
    location: {
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
    },
  });

  const queryClient = router.options.context?.queryClient ?? new QueryClient();

  // NOTE: TanStack Router SSR rendering is non-trivial and version-specific.
  // For now, we return an SSR shell with empty root; client will hydrate.
  const body = "";

  return HTML_SHELL(body);
}

