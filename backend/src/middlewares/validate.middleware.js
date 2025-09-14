"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
/**
 * validate - Zod validation middleware
 * Ensures request body matches schema before proceeding
 */
function validate(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body); // throws error if invalid
            next();
        }
        catch (err) {
            return res.status(400).json({
                success: false,
                error: "Validation failed",
                details: err.errors || err.message,
            });
        }
    };
}
