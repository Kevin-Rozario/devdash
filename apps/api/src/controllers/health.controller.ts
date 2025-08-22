import { FastifyReply, FastifyRequest } from "fastify";
import asyncHandler from "../utils/asyncHandler.util.js";

export const healthCheck = asyncHandler(
  async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({
      status: "ok",
      version: "1.0.0",
      uptime: process.uptime(),
    });
  },
);
