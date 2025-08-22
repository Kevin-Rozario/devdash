import Fastify from "fastify";
import healthRoutes from "@routes/health.route.js";

export async function buildApp() {
  const app = Fastify();
  app.register(healthRoutes);
  return app;
}
