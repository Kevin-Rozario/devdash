import { z } from "zod";

export const workflowRunSchema = z.object({
  repo: z.string(),
  status: z.enum(["queued", "running", "success", "failure"]),
  startedAt: z.date(),
  completedAt: z.date().optional()
});

export type WorkflowRunInput = z.infer<typeof workflowRunSchema>;
export type WorkflowRun = z.infer<typeof workflowRunSchema>;
