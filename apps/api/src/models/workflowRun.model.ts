import mongoose, { Schema, Document } from "mongoose";
import type { IWorkflowRun } from "../types/workflowRun.js";

export interface IWorkflowRunDocument extends IWorkflowRun, Document {}

const WorkflowRunSchema: Schema<IWorkflowRunDocument> = new Schema(
  {
    repo: { type: String, required: true },
    status: { type: String, enum: ["queued", "running", "success", "failure"], required: true },
    startedAt: { type: Date, required: true },
    completedAt: { type: Date }
  }
);

export const WorkflowRunModel = mongoose.model<IWorkflowRunDocument>("WorkflowRun", WorkflowRunSchema);
