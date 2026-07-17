/**
 * User Routes
 * Handles user profile management endpoints:
 * - Get user profile
 * - Update user profile
 * - Delete user account
 */

const express = require("express");
const router = express.Router();

/**
 * GET /api/users/me
 * Retrieve current user profile information
 * Returns: User object with id, name, email, plan, aiCredits
 */
router.get("/me", (req, res) => {
  res.status(200).json({
    user: {
      id: 1,
      name: "Info Chan",
      email: "info@example.com",
      plan: "Free",
      aiCredits: 25,
    },
  });
});

/**
 * PUT /api/users/me
 * Update current user profile
 * Body: { name, email, plan, aiCredits }
 */
router.put("/me", (req, res) => {
  const updatedUser = req.body;

  res.status(200).json({
    message: "Profile updated successfully",
    user: updatedUser,
  });
});

/**
 * DELETE /api/users/me
 * Delete current user account permanently
 */
router.delete("/me", (req, res) => {
  res.status(204).json({
    message: "Account deleted successfully",
  });
});

module.exports = router;
