/**
 * Resume API Server
 * Main application entry point
 * Sets up Express server with routes and middleware
 */

const express = require("express");
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    message: "APIs is Running!"
  });
});

// Import all route modules
const authRoutes = require("./routes/auth");
const documentRoutes = require("./routes/documents");
const userRoutes = require("./routes/users");
const templateRoutes = require("./routes/templates");
const aiRoutes = require("./routes/ai");
const applicationRoute = require("./routes/applications");

// Register route handlers with API prefix
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/applications", applicationRoute);

// Start server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
