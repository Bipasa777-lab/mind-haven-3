"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
/**
 * Global Error Handler Middleware
 * Catches all errors and sends structured JSON response
 */
function errorHandler(err, req, res, next) {
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
