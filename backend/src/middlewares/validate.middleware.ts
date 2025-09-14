import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

/**
 * validate - Zod validation middleware
 * Ensures request body matches schema before proceeding
 */
export function validate(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); // throws error if invalid
      next();
    } catch (err: any) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: err.errors || err.message,
      });
    }
  };
}
