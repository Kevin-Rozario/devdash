import mongoose, { Schema, Document } from "mongoose";
import type { IIntegration } from "../types/integration.js";

export interface IIntegrationDocument extends IIntegration, Document {}

const IntegrationSchema: Schema<IIntegrationDocument> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    service: { type: String, required: true },
    config: { type: Object, required: true },
  },
  { timestamps: true },
);

export const IntegrationModel = mongoose.model<IIntegrationDocument>(
  "Integration",
  IntegrationSchema,
);
