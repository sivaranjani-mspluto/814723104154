const express = require("express");
const cors = require("cors");
require("dotenv").config();

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/notifications", notificationRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Notification API is running!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
