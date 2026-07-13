const express = require("express");
const router = express.Router();

router.post("/bullets", (req, res) => {
  const { text } = req.body;

  res.status(200).json({
    original: text,
    result: `${text} (Generated Bullet Points)`,
  });
});

router.post("/summary", (req, res) => {
  const { text } = req.body;

  res.status(200).json({
    original: text,
    summary: `${text} (AI Summary)`,
  });
});

router.post("/rewrite", (req, res) => {
  const { text } = req.body;

  res.status(200).json({
    original: text,
    rewritten: `${text} (Improved Version)`,
  });
});

router.post("/prompt", (req, res) => {
  const { prompt } = req.body;

  res.status(200).json({
    prompt: prompt,
    response: "This is a mock AI response.",
  });
});

module.exports = router;
