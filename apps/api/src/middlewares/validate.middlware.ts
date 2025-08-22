import ApiError from "@utils/apiError.util.js";
import type { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";

const validateMiddleware = (schema: ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return next(new ApiError(400, "Validation failed"));
    }
  };
};

export default validateMiddleware;
