import { z } from "zod";

export const logEntrySchema = z.object({
  service: z.enum(["docker", "aws", "elastic", "system"]),
  message: z.string(),
  level: z.enum(["info", "warning", "error"]),
  timestamp: z.date().default(new Date())
});

export type LogEntryInput = z.infer<typeof logEntrySchema>;
export type LogEntry = z.infer<typeof logEntrySchema>;