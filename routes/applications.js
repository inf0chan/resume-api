/**
 * Application Routes
 * Handles job application tracking endpoints:
 * - List all applications
 * - Create new application record
 * - Update application status
 * - Delete application
 */

const express = require("express");

const router = express.Router();

/**
 * GET /api/applications
 * Retrieve all job applications for user
 * Returns: Array of application objects
 */
router.get("/", (req, res) => {
  res.status(200).json({
    applications: [
      {
        id: 1,
        company: "Google",
        position: "Frontend Developer",
        status: "Applied",
      },
    ],
  });
});

/**
 * POST /api/applications
 * Create new job application record
 * Body: { company, position, status, appliedDate }
 */
router.post("/", (req, res) => {
  const application = req.body;

  res.status(201).json({
    message: "Application Added",
    application: application,
  });
});

/**
 * PATCH /api/applications/:id
 * Update application status or details
 * Params: id (application ID)
 * Body: { status, notes, appliedDate }
 */
router.patch("/:id", (req, res) => {
  const id = req.params.id;

  const updatedApplication = req.body;

  res.status(200).json({
    message: "Application Updated",
    id: id,
    application: updatedApplication,
  });
});

/**
 * DELETE /api/applications/:id
 * Delete application record
 * Params: id (application ID)
 */
router.delete("/:id", (req, res) => {
  res.status(204).send();
});

module.exports = router;
