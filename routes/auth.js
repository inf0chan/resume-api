const express = require("express");
const router = express.Router();
router.post("/register", (req, res) => {
  res.json({
    message: "User Registered",
  });
});
router.post("/login", (req, res) => {
  res.json({
    message: "Login Successful",
  });
});

router.post("/logout", (req, res) => {
  res.json({
    message: "Logout Successful",
  });
});

router.post("/forget-password", (req, res) => {
  res.json({
    message: "forget-password successfully",
  });
});

router.post("/reset-password", (req, res) => {
  res.json({
    message: "reset-password successfully",
  });
});

module.exports = router;
