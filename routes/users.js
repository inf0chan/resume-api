const express = require("express");
const router = express.Router();

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

router.put("/me", (req, res) => {
  const updatedUser = req.body;

  res.status(200).json({
    message: "Profile updated successfully",
    user: updatedUser,
  });
});

router.delete("/me", (req, res) => {
  res.status(204).json({
    message: "Account deleted successfully",
  });
});

module.exports = router;
