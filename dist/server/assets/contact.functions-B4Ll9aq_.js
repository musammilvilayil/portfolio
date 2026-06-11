import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-CUh8A8of.js";
import { z } from "zod";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2e3)
});
const submitContact_createServerFn_handler = createServerRpc({
  id: "1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd",
  name: "submitContact",
  filename: "src/lib/contact.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((data) => ContactSchema.parse(data)).handler(submitContact_createServerFn_handler, async ({
  data
}) => {
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.js");
  const {
    error
  } = await supabaseAdmin.from("contact_messages").insert({
    name: data.name,
    email: data.email,
    subject: data.subject || null,
    message: data.message
  });
  if (error) {
    console.error("[contact] insert failed", error);
    throw new Error("Failed to send message");
  }
  return {
    ok: true
  };
});
export {
  submitContact_createServerFn_handler
};
