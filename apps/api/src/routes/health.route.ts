import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { healthCheck } from "../controllers/health.controller.js";

export default function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  fastify.get("/health", healthCheck);
}
