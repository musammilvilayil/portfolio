import express from "express";
import { z } from "zod";

import { getSupabaseAdmin } from "../supabase.ts";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export const contactRouter = express.Router();

contactRouter.post("/", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: parsed.error.flatten() });
  }

  const { supabaseAdmin } = await getSupabaseAdmin();
  const payload = parsed.data;

  const { error } = await supabaseAdmin.from("contact_messages").insert({
    name: payload.name,
    email: payload.email,
    subject: payload.subject || null,
    message: payload.message,
  });

  if (error) {
    console.error("[contact] insert failed", error);
    return res.status(500).json({ ok: false, error: "Failed to send message" });
  }

  return res.status(200).json({ ok: true });
});

