const express = require("express");
const cors = require("cors");
require("dotenv").config();

const notificationRoutes = require("./routes/notificationRoutes");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Notification API is running!" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
