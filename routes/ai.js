/**
 * AI Routes
 * Handles AI-powered resume enhancement endpoints:
 * - Generate bullet points
 * - Create AI summary
 * - Rewrite text
 * - Custom AI prompts
 */

const express = require("express");
const router = express.Router();

/**
 * POST /api/ai/bullets
 * Generate optimized bullet points from text
 * Body: { text }
 * Returns: { original, result }
 */
router.post("/bullets", (req, res) => {
  const { text } = req.body;

  res.status(200).json({
    original: text,
    result: `${text} (Generated Bullet Points)`,
  });
});

/**
 * POST /api/ai/summary
 * Generate AI-powered summary of text
 * Body: { text }
 * Returns: { original, summary }
 */
router.post("/summary", (req, res) => {
  const { text } = req.body;

  res.status(200).json({
    original: text,
    summary: `${text} (AI Summary)`,
  });
});

/**
 * POST /api/ai/rewrite
 * Rewrite and improve text for better impact
 * Body: { text }
 * Returns: { original, rewritten }
 */
router.post("/rewrite", (req, res) => {
  const { text } = req.body;

  res.status(200).json({
    original: text,
    rewritten: `${text} (Improved Version)`,
  });
});

/**
 * POST /api/ai/prompt
 * Send custom prompt to AI and get response
 * Body: { prompt }
 * Returns: { prompt, response }
 */
router.post("/prompt", (req, res) => {
  const { prompt } = req.body;

  res.status(200).json({
    prompt: prompt,
    response: "This is a mock AI response.",
  });
});

module.exports = router;
