import { z } from "zod";

export const UserCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["admin", "viewer"]).default("viewer")
});
