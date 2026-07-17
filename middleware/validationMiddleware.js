/**
 * Validation Middleware
 * Validates incoming requests for required fields and data formats
 * Includes email validation and user data validation
 */

/**
 * Validate that request body is not empty
 */
const validateRequestBody = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Request body cannot be empty",
    });
  }
  next();
};

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email format is valid
 */
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate user data in request body
 * Checks email format and name length
 */
const validateUser = (req, res, next) => {
  const { email, name } = req.body;

  if (email && !validateEmail(email)) {
    return res.status(400).json({
      error: "Invalid email format",
    });
  }

  if (name && name.trim().length < 2) {
    return res.status(400).json({
      error: "Name must be at least 2 characters",
    });
  }

  next();
};

module.exports = {
  validateRequestBody,
  validateEmail,
  validateUser,
};
