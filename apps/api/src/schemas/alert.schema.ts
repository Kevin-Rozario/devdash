import { z } from "zod";

export const alertSchema = z.object({
  service: z.enum(["prometheus", "aws", "system"]),
  message: z.string(),
  severity: z.enum(["info", "warning", "critical"]),
  status: z.enum(["active", "resolved"]).default("active"),
  createdAt: z.date().default(new Date()),
  resolvedAt: z.date().optional()
});

export type AlertInput = z.infer<typeof alertSchema>;
export type Alert = z.infer<typeof alertSchema>;