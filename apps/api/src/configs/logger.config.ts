import pino from "pino";
import { env } from "@configs/env.config.js";

export const logger = pino({
  level: env.LOG_LEVEL,
  transport: env.NODE_ENV === "development" ? { target: "pino-pretty" } : undefined,
  base: { service: "devdash-api" }
});
