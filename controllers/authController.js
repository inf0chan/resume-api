/**
 * Authentication Controller
 * Handles user authentication operations:
 * - Registration: Create new user accounts
 * - Login: Authenticate existing users
 * - Password Management: Reset and recovery functionality
 */

const User = require("../models/User");

// Helper function to validate required fields
function validateRequiredFields(fields, fieldNames) {
  for (const field of fieldNames) {
    if (!fields[field]) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
  }
  return null;
}

// Helper function to send error response
function sendErrorResponse(res, status, error) {
  return res.status(status).json({ error });
}

// Helper function to send success response
function sendSuccessResponse(res, status, message, data = {}) {
  return res.status(status).json({
    message,
    ...data,
  });
}

/**
 * Auth controller object with handler methods
 */
const authController = {
  // Handle user registration
  register: (req, res) => {
    try {
      const { email, password, name } = req.body;

      // Validate required fields
      const validationError = validateRequiredFields(
        { email, password, name },
        ["email", "password", "name"]
      );
      if (validationError) {
        return sendErrorResponse(res, 400, validationError);
      }

      // Check if user already exists
      const existingUser = User.getByEmail(email);
      if (existingUser) {
        return sendErrorResponse(res, 409, "User already exists");
      }

      // Create new user
      const newUser = User.create({
        name,
        email,
        password, // In production, hash this password
        plan: "Free",
        aiCredits: 25,
      });

      sendSuccessResponse(res, 201, "User Registered", { user: newUser });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Handle user login
  login: (req, res) => {
    try {
      const { email, password } = req.body;

      // Validate required fields
      const validationError = validateRequiredFields(
        { email, password },
        ["email", "password"]
      );
      if (validationError) {
        return sendErrorResponse(res, 400, validationError);
      }

      // Find user by email
      const user = User.getByEmail(email);
      if (!user) {
        return sendErrorResponse(res, 401, "Invalid credentials");
      }

      // Verify password (in production, use bcrypt)
      if (user.password !== password) {
        return sendErrorResponse(res, 401, "Invalid credentials");
      }

      sendSuccessResponse(res, 200, "Login Successful", { user });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Handle user logout
  logout: (req, res) => {
    try {
      sendSuccessResponse(res, 200, "Logout Successful");
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Handle forgot password request
  forgetPassword: (req, res) => {
    try {
      const { email } = req.body;

      // Validate email
      const validationError = validateRequiredFields(
        { email },
        ["email"]
      );
      if (validationError) {
        return sendErrorResponse(res, 400, validationError);
      }

      // Check if user exists
      const user = User.getByEmail(email);
      if (!user) {
        return sendErrorResponse(res, 404, "User not found");
      }

      sendSuccessResponse(res, 200, "Password reset link sent to email");
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Handle password reset with token
  resetPassword: (req, res) => {
    try {
      const { email, token, newPassword } = req.body;

      // Validate required fields
      const validationError = validateRequiredFields(
        { email, token, newPassword },
        ["email", "token", "newPassword"]
      );
      if (validationError) {
        return sendErrorResponse(res, 400, validationError);
      }

      // Find user
      const user = User.getByEmail(email);
      if (!user) {
        return sendErrorResponse(res, 404, "User not found");
      }

      // Update password
      User.update(user.id, {
        password: newPassword, // In production, hash this password
      });

      sendSuccessResponse(res, 200, "Password reset successfully");
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },
};

module.exports = authController;
