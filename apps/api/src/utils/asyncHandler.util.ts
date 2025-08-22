import { FastifyRequest, FastifyReply } from "fastify";

const asyncHandler = (
  fn: (request: FastifyRequest, reply: FastifyReply) => Promise<void>,
) => {
  return (request: FastifyRequest, reply: FastifyReply) => {
    Promise.resolve(fn(request, reply)).catch(reply.send);
  };
};

export default asyncHandler;
