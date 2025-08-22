import { buildApp } from "./app.js";
import { env } from "./configs/env.config.js";

const startServer = async () => {
  const app = await buildApp();

  const signals: NodeJS.Signals[] = ["SIGINT", "SIGTERM"];
  signals.forEach((s) =>
    process.on(s, async () => {
      app.log.info({ signal: s }, "Shutting down");
      await app.close();
      process.exit(0);
    }),
  );

  try {
    await app.listen({ port: env.PORT });
    console.log(`🚀 Server running at http://localhost:${env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();
