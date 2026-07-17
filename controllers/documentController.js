/**
 * Document Controller
 * Manages resume document operations:
 * - CRUD operations for documents
 * - Document retrieval and filtering
 * - Content management
 */

const Document = require("../models/Document");

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

// Helper function to validate document fields
function validateDocumentFields(title, content) {
  if (!title || title.trim() === "") {
    return "Title is required";
  }
  if (!content || content.trim() === "") {
    return "Content is required";
  }
  return null;
}

/**
 * Document controller object with handler methods
 */
const documentController = {
  // Retrieve all documents
  getAll: (req, res) => {
    try {
      const documents = Document.getAll();
      sendSuccessResponse(res, 200, "Documents retrieved", { documents });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Retrieve specific document by ID
  getById: (req, res) => {
    try {
      const { id } = req.params;
      const document = Document.getById(parseInt(id));

      if (!document) {
        return sendErrorResponse(res, 404, "Document not found");
      }

      sendSuccessResponse(res, 200, "Document retrieved", { document });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Create new document
  create: (req, res) => {
    try {
      const { title, content, templateId } = req.body;

      // Validate document fields
      const validationError = validateDocumentFields(title, content);
      if (validationError) {
        return sendErrorResponse(res, 400, validationError);
      }

      // Create new document
      const newDocument = Document.create({
        title,
        content,
        templateId,
        userId: req.query.userId || 1,
      });

      sendSuccessResponse(res, 201, "Document created successfully", {
        document: newDocument,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Update document by ID
  update: (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      // Update document
      const updatedDocument = Document.update(parseInt(id), updates);

      if (!updatedDocument) {
        return sendErrorResponse(res, 404, "Document not found");
      }

      sendSuccessResponse(res, 200, "Document updated successfully", {
        document: updatedDocument,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Delete document by ID
  delete: (req, res) => {
    try {
      const { id } = req.params;
      Document.delete(parseInt(id));

      sendSuccessResponse(res, 204, "Document deleted successfully");
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },
};

module.exports = documentController;
