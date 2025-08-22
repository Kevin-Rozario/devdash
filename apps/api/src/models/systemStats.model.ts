import mongoose, { Schema, Document } from "mongoose";
import type { SystemStat } from "@schemas/systemStat.schema.js";

export interface ISystemStatDocument extends SystemStat, Document {}

const SystemStatSchema: Schema<ISystemStatDocument> = new Schema({
  cpuUsage: { type: Number, required: true },
  memoryUsage: { type: Number, required: true },
  diskUsage: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const SystemStatModel = mongoose.model<ISystemStatDocument>(
  "SystemStat",
  SystemStatSchema,
);
