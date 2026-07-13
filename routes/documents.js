const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    message: "All Documents",
  });
});
router.post("/", (req, res) => {
  const newDocument = req.body;

  res.json({
    message: "Document Created",
    document: newDocument,
  });
});

router.post("/import", (req, res) => {
  res.status(201).json({
    message: "Document imported successfully",
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    document: {
      id: id,
      title: "Sample Resume",
    },
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  const updatedDocument = req.body;

  res.status(200).json({
    message: "Document updated",
    id: id,
    document: updatedDocument,
  });
});

router.delete("/:id", (req, res) => {
  res.status(204).json({
    message: "id deleted successfully"
  });
});
module.exports = router;
