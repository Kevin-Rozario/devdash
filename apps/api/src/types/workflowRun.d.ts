export interface IWorkflowRun {
  repo: string;
  status: "queued" | "running" | "success" | "failure";
  startedAt: Date;
  completedAt?: Date;
}