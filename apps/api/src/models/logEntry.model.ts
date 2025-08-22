import mongoose, { Schema, Document } from "mongoose";
import type { LogEntry } from "@schemas/logEntry.schema.js";

export interface ILogEntryDocument extends LogEntry, Document {}

const LogEntrySchema: Schema<ILogEntryDocument> = new Schema(
  {
    service: { type: String, required: true },
    message: { type: String, required: true },
    level: { type: String, enum: ["info", "warning", "error"], default: "info" },
    timestamp: { type: Date, default: Date.now }
  }
);

export const LogEntryModel = mongoose.model<ILogEntryDocument>("LogEntry", LogEntrySchema);
