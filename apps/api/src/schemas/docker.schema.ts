import { z } from "zod";

export const dockerContainerSchema = z.object({
  name: z.string(),
  status: z.enum(["running", "stopped", "paused"]),
  image: z.string(),
  ports: z.array(z.number()).optional(),
  lastCheckedAt: z.date().optional(),
});

export type DockerContainerInput = z.infer<typeof dockerContainerSchema>;
export type DockerContainer = z.infer<typeof dockerContainerSchema>;
