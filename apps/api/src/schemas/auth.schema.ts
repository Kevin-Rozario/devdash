import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["admin", "viewer"]).default("viewer")
});
