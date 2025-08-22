import express from "express";
import errorMiddleware from "@middlewares/error.middleware.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// Error Middleware
app.use(errorMiddleware);

export default app;
