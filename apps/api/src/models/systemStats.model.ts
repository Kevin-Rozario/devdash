import mongoose, { Schema, Document } from "mongoose";
import type { ISystemStat } from "../types/systemStats.js";

export interface ISystemStatDocument extends ISystemStat, Document {}

const SystemStatSchema: Schema<ISystemStatDocument> = new Schema({
  cpuUsage: { type: Number, required: true },
  memoryUsage: { type: Number, required: true },
  diskUsage: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const SystemStatModel = mongoose.model<ISystemStatDocument>("SystemStat", SystemStatSchema);
