import { z } from "zod";

export const ProjectCreateSchema = z.object({
  name: z.string().min(2),
  orgId: z.string().optional()
});

export const ProjectUpdateSchema = ProjectCreateSchema.partial();
