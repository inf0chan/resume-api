const express = require("express");

const router = express.Router();

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

router.post("/", (req, res) => {
  const application = req.body;

  res.status(201).json({
    message: "Application Added",
    application: application,
  });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;

  const updatedApplication = req.body;

  res.status(200).json({
    message: "Application Updated",
    id: id,
    application: updatedApplication,
  });
});

router.delete("/:id", (req, res) => {
  res.status(204).send();
});

module.exports = router;
