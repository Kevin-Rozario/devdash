import { Types } from "mongoose";

export interface IIntegration {
  userId: Types.ObjectId;
  service:
    | "docker"
    | "github"
    | "aws"
    | "prometheus"
    | "k8s"
    | "slack"
    | "elastic";
  config: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
