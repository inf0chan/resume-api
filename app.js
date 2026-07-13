const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "APIs is Running!"
  });
});

const authRoutes = require("./routes/auth");
const documentRoutes = require("./routes/documents");
const userRoutes = require("./routes/users");
const templateRoutes = require("./routes/templates");
const aiRoutes = require("./routes/ai");
const applicationRoute = require("./routes/applications");

app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/applications", applicationRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
