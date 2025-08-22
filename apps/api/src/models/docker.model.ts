import mongoose, { Schema, Document } from "mongoose";
import type { DockerContainer } from "@schemas/docker.schema.js";

export interface IDockerContainerDocument extends DockerContainer, Document {}

const DockerContainerSchema: Schema<IDockerContainerDocument> = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  image: { type: String, required: true },
  ports: { type: [String], default: [] },
  lastCheckedAt: { type: Date, default: Date.now },
});

export const DockerContainerModel = mongoose.model<IDockerContainerDocument>(
  "DockerContainer",
  DockerContainerSchema,
);
