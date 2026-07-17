/**
 * Template Routes
 * Handles resume template management endpoints:
 * - List all available templates
 * - Get specific template details
 */

const express = require("express");
const router = express.Router();

/**
 * GET /api/templates
 * Retrieve all available resume templates
 * Returns: Array of template objects with id, name, category
 */
router.get("/", (req, res) => {
  res.status(200).json({
    message: "templates listing successfully",
    templates: [
      {
        id: 1,
        name: "Modern",
        category: "simple",
      },
      {
        id: 2,
        name: "Creative",
        category: "designer",
      },
      {
        id: 3,
        name: "Classic",
        category: "premium",
      },
    ],
  });
});

/**
 * GET /api/templates/:id
 * Retrieve specific template by ID
 * Params: id (template ID)
 * Returns: Template object with details
 */
router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    template: {
      id: id,
      name: "",
      category: "",
    },
  });
});

module.exports = router;
