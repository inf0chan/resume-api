/**
 * Template Controller
 * Manages resume template operations:
 * - CRUD operations for templates
 * - Template retrieval and management
 * - Template availability
 */

const Template = require("../models/Template");

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
 * Template controller object with handler methods
 */
const templateController = {
  // Retrieve all available templates
  getAll: (req, res) => {
    try {
      const templates = Template.getAll();
      sendSuccessResponse(res, 200, "Templates retrieved", { templates });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Retrieve specific template by ID
  getById: (req, res) => {
    try {
      const { id } = req.params;
      const template = Template.getById(parseInt(id));

      if (!template) {
        return sendErrorResponse(res, 404, "Template not found");
      }

      sendSuccessResponse(res, 200, "Template retrieved", { template });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Create new template
  create: (req, res) => {
    try {
      const { name, description, content } = req.body;

      if (!name || !content) {
        return sendErrorResponse(res, 400, "Name and content are required");
      }

      const newTemplate = Template.create({
        name,
        description,
        content,
      });

      sendSuccessResponse(res, 201, "Template created successfully", {
        template: newTemplate,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Update template by ID
  update: (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updatedTemplate = Template.update(parseInt(id), updates);

      if (!updatedTemplate) {
        return sendErrorResponse(res, 404, "Template not found");
      }

      sendSuccessResponse(res, 200, "Template updated successfully", {
        template: updatedTemplate,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Delete template by ID
  delete: (req, res) => {
    try {
      const { id } = req.params;
      Template.delete(parseInt(id));

      sendSuccessResponse(res, 204, "Template deleted successfully");
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },
};

module.exports = templateController;
