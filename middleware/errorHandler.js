/**
 * Error Handler Middleware
 * Centralized error handling for all routes
 * Logs errors and sends formatted error responses
 */

/**
 * Handle errors and send appropriate responses
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    error: message,
    status,
  });
};

module.exports = errorHandler;
