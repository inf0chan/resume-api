/**
 * AI Controller
 * Handles AI-powered features (currently mock implementations):
 * - Resume generation and enhancement
 * - Content improvement suggestions
 * - Resume optimization recommendations
 */

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

// Helper function to validate text input
function validateTextInput(text) {
  if (!text || text.trim() === "") {
    return "Text content is required";
  }
  return null;
}

/**
 * AI controller object with handler methods
 */
const aiController = {
  // Generate enhanced resume from user content
  generateResume: (req, res) => {
    try {
      const { content, templateId } = req.body;

      // Validate input
      const validationError = validateTextInput(content);
      if (validationError) {
        return sendErrorResponse(res, 400, validationError);
      }

      // Mock AI response
      const generatedResume = {
        id: Math.floor(Math.random() * 1000),
        originalContent: content,
        enhancedContent: `Enhanced resume based on: ${content}`,
        suggestions: [
          "Add more quantifiable achievements",
          "Improve keyword density for ATS",
          "Enhance action verbs in descriptions",
        ],
        timestamp: new Date(),
      };

      sendSuccessResponse(res, 200, "Resume generated successfully", {
        resume: generatedResume,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Improve text content using AI
  improveContent: (req, res) => {
    try {
      const { text } = req.body;

      // Validate input
      const validationError = validateTextInput(text);
      if (validationError) {
        return sendErrorResponse(res, 400, validationError);
      }

      // Mock AI improvement
      const improvedText = {
        original: text,
        improved: `Improved version: ${text}`,
        score: Math.floor(Math.random() * 100),
      };

      sendSuccessResponse(res, 200, "Content improved successfully", {
        data: improvedText,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },

  // Generate AI suggestions for content improvement
  suggestImprovements: (req, res) => {
    try {
      const { content } = req.body;

      // Validate input
      const validationError = validateTextInput(content);
      if (validationError) {
        return sendErrorResponse(res, 400, validationError);
      }

      // Mock AI suggestions
      const suggestions = {
        content,
        improvements: [
          "Use active voice more consistently",
          "Quantify achievements with metrics",
          "Add relevant keywords from job description",
          "Restructure for better flow",
        ],
        aiCreditsUsed: 5,
      };

      sendSuccessResponse(res, 200, "Suggestions generated successfully", {
        data: suggestions,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  },
};

module.exports = aiController;
