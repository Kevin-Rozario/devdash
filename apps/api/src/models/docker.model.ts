import mongoose, { Schema, Document } from "mongoose";
import type { IDockerContainer } from "../types/dockerContainer.js";

export interface IDockerContainerDocument extends IDockerContainer, Document {}

const DockerContainerSchema: Schema<IDockerContainerDocument> = new Schema(
  {
    name: { type: String, required: true },
    status: { type: String, required: true },
    image: { type: String, required: true },
    ports: { type: [String], default: [] },
    lastCheckedAt: { type: Date, default: Date.now }
  }
);

export const DockerContainerModel = mongoose.model<IDockerContainerDocument>(
  "DockerContainer",
  DockerContainerSchema
);
