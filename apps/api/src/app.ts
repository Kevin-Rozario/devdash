import express from "express";
import cors from "cors";
import errorMiddleware from "@middlewares/error.middleware.js";
import loggerMiddleware from "@middlewares/logger.middleware.js";
import authenticateMiddleware from "@middlewares/authenticate.middleware.js";

const app = express();

// Cors Middleware
app.use(cors());

// Request Parser Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger Middleware
app.use(loggerMiddleware);

// Authenticate Middleware
// app.use(authenticateMiddleware);

// Routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    status: 200,
    message: "Welcome to DevDash API",
  });
});

// Error Middleware
app.use(errorMiddleware);

export default app;
