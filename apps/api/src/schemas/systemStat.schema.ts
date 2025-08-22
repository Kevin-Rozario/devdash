import { z } from "zod";

export const systemStatSchema = z.object({
  cpuUsage: z.number().min(0).max(100),
  memoryUsage: z.number().min(0).max(100),
  diskUsage: z.number().min(0).max(100),
  timestamp: z.date().default(new Date())
});

export type SystemStatInput = z.infer<typeof systemStatSchema>;
export type SystemStat = z.infer<typeof systemStatSchema>;
