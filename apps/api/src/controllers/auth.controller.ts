import type { Request, Response } from "express";
import ApiError from "@utils/apiError.util.js";
import ApiResponse from "@utils/apiResponse.util.js";
import asyncHandler from "@utils/asyncHandler.util.js";

export const registerUser = asyncHandler((req: Request, res: Response) => {});

// export const loginUser = asyncHandler((req: Request, res: Response) => {});
// export const logoutUser = asyncHandler((req: Request, res: Response) => {});
// export const userProfile = asyncHandler((req: Request, res: Response) => {});
// export const refreshToken = asyncHandler((req: Request, res: Response) => {});
