import { Request, Response, NextFunction } from "express";

/**
 * Global Error Handler Middleware
 * Catches all errors and sends structured JSON response
 */
export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("❌ Error:", err);

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    error: {
      message,
      details: err.details || null,
    },
  });
}
