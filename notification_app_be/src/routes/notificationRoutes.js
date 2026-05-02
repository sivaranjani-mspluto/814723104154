const express = require("express");
const router = express.Router();
const { fetchNotifications, getTopNNotifications } = require("../notificationService");

// GET /api/notifications
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const notification_type = req.query.notification_type;

    const notifications = await fetchNotifications(page, limit, notification_type);
    res.json({ success: true, notifications });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/notifications/priority
router.get("/priority", async (req, res) => {
  try {
    const n = parseInt(req.query.n) || 10;
    const topNotifications = await getTopNNotifications(n);
    res.json({ success: true, notifications: topNotifications });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
