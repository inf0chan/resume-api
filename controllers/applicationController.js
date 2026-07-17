/**
 * Application Controller
 * Manages job application tracking operations:
 * - CRUD operations for applications
 * - Application status management
 * - User-specific application queries
 */

const Application = require("../models/Application");

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
 * Application controller object with handler methods
 */
const applicationController = {
  // Retrieve all job applications
  getAll: (req, res) => {
    try {
      const applications = Application.getAll();
      sendSuccessResponse(res, 200, "Applications retrieved", { applications });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Retrieve specific application by ID
  getById: (req, res) => {
    try {
      const { id } = req.params;
      const application = Application.getById(parseInt(id));

      if (!application) {
        return sendErrorResponse(res, 404, "Application not found");
      }

      sendSuccessResponse(res, 200, "Application retrieved", { application });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Create new application record
  create: (req, res) => {
    try {
      const { companyName, position, status, appliedDate } = req.body;

      if (!companyName || !position) {
        return sendErrorResponse(
          res,
          400,
          "Company name and position are required"
        );
      }

      const newApplication = Application.create({
        companyName,
        position,
        status: status || "Applied",
        appliedDate: appliedDate || new Date(),
        userId: req.query.userId || 1,
      });

      sendSuccessResponse(res, 201, "Application created successfully", {
        application: newApplication,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Update application by ID
  update: (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updatedApplication = Application.update(parseInt(id), updates);

      if (!updatedApplication) {
        return sendErrorResponse(res, 404, "Application not found");
      }

      sendSuccessResponse(res, 200, "Application updated successfully", {
        application: updatedApplication,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Delete application by ID
  delete: (req, res) => {
    try {
      const { id } = req.params;
      Application.delete(parseInt(id));

      sendSuccessResponse(res, 204, "Application deleted successfully");
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },
};

module.exports = applicationController;
