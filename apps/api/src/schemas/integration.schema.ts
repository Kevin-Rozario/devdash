import { z } from "zod";

export const integrationSchema = z.object({
  service: z.enum([
    "docker",
    "github",
    "aws",
    "prometheus",
    "k8s",
    "slack",
    "elastic",
  ]),
  config: z.record(z.string(), z.any()), // flexible JSON object for service configs
  userId: z.string().min(1, "UserId is required"),
});

export type IntegrationInput = z.infer<typeof integrationSchema>;
