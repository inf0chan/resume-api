const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "templates listing successfully",
    templates: [
      {
        id: 1,
        name: "Modern",
        category: "simple",
      },
      {
        id: 2,
        name: "Creative",
        category: "designer",
      },
      {
        id: 3,
        name: "Classic",
        category: "premium",
      },
    ],
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    template: {
      id: id,
      name: "",
      category: "",
    },
  });
});

module.exports = router;
