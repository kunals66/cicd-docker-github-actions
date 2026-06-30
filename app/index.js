const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 CI/CD Pipeline with GitHub Actions & Docker is Working!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Application is healthy"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;