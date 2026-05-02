const axios = require("axios");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const NOTIFICATIONS_API = "http://20.207.122.201/evaluation-service/notifications";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

const TYPE_WEIGHT = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function fetchNotifications(page = 1, limit = 20, notification_type) {
  try {
    const params = { page, limit };
    if (notification_type) params.notification_type = notification_type;

    const response = await axios.get(NOTIFICATIONS_API, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      params,
    });

    return response.data.notifications;

  } catch (err) {
    throw err;
  }
}

function calculateScore(notification) {
  const typeWeight = TYPE_WEIGHT[notification.Type] || 0;
  const recencyScore = new Date(notification.Timestamp).getTime() / 1e12;
  return typeWeight + recencyScore;
}

async function getTopNNotifications(n = 10) {
  const notifications = await fetchNotifications(1, 10);

  console.log("Total fetched:", notifications.length); 
  console.log("Sample:", notifications[0]); 

  const scored = notifications.map((notif) => ({
    ...notif,
    score: calculateScore(notif),
  }));

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, n);
}

module.exports = { fetchNotifications, getTopNNotifications };
