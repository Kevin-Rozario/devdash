import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["admin", "user"]).default("user"),
});

// For login (only email + password)
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Types inferred automatically
export type CreateUserInput = z.infer<typeof userSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
