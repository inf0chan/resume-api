/**
 * User Controller
 * Manages user profile operations:
 * - Profile retrieval and updates
 * - Account management
 * - User listing
 */

const User = require("../models/User");

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
 * User controller object with handler methods
 */
const userController = {
  // Retrieve user profile information
  getProfile: (req, res) => {
    try {
      const userId = req.query.userId || 1;
      const user = User.getById(parseInt(userId));

      if (!user) {
        return sendErrorResponse(res, 404, "User not found");
      }

      sendSuccessResponse(res, 200, "Profile retrieved", { user });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Update user profile with new information
  updateProfile: (req, res) => {
    try {
      const userId = req.query.userId || 1;
      const updates = req.body;

      const updatedUser = User.update(parseInt(userId), updates);

      if (!updatedUser) {
        return sendErrorResponse(res, 404, "User not found");
      }

      sendSuccessResponse(res, 200, "Profile updated successfully", {
        user: updatedUser,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Delete user account permanently
  deleteProfile: (req, res) => {
    try {
      const userId = req.query.userId || 1;
      User.delete(parseInt(userId));

      sendSuccessResponse(res, 204, "Account deleted successfully");
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Retrieve all users (admin function)
  getAllUsers: (req, res) => {
    try {
      const users = User.getAll();
      sendSuccessResponse(res, 200, "Users retrieved", { users });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },
};

module.exports = userController;
