import mongoose, { Schema, Document } from "mongoose";
import type { Alert } from "@schemas/alert.schema.js";

export interface IAlertDocument extends Alert, Document {}

const AlertSchema: Schema<IAlertDocument> = new Schema(
  {
    service: { type: String, required: true },
    message: { type: String, required: true },
    severity: {
      type: String,
      enum: ["info", "warning", "critical"],
      required: true,
    },
    status: { type: String, enum: ["active", "resolved"], default: "active" },
    resolvedAt: { type: Date },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

export const AlertModel = mongoose.model<IAlertDocument>("Alert", AlertSchema);
