import mongoose, { Schema, Document } from "mongoose";
import type { ILogEntry } from "../types/logEntry.js";

export interface ILogEntryDocument extends ILogEntry, Document {}

const LogEntrySchema: Schema<ILogEntryDocument> = new Schema(
  {
    service: { type: String, required: true },
    message: { type: String, required: true },
    level: { type: String, enum: ["info", "warning", "error"], default: "info" },
    timestamp: { type: Date, default: Date.now }
  }
);

export const LogEntryModel = mongoose.model<ILogEntryDocument>("LogEntry", LogEntrySchema);
