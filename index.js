const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Node.js project!");
});

// Another test route
app.get("/test", (req, res) => {
  res.json({ message: "This is a test route", success: true });
});

// POST route for testing JSON
app.post("/echo", (req, res) => {
  res.json({
    message: "You sent this data",
    data: req.body,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
