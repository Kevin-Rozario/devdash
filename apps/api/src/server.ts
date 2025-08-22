import app from "./app.js";
import { env } from "@config/env.config.js";

const startServer = async () => {
    try {
        app.listen(env.PORT, () => {
            console.log(`Server is running on port ${env.PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();