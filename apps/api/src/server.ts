import { buildApp } from "./app.js";
import { env } from "@configs/env.config.js";
import { logger } from "@configs/logger.config.js";

const startServer = async () => {
  const app = await buildApp();

  const signals: NodeJS.Signals[] = ["SIGINT", "SIGTERM"];
  signals.forEach((s) =>
    process.on(s, async () => {
      logger.info({ signal: s }, "Shutting down");
      await app.close();
      process.exit(0);
    }),
  );

  try {
    await app.listen({ port: env.PORT });
    logger.info(`Server is listening on port ${env.PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

startServer();
