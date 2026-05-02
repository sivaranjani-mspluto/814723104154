# AffordMed Backend Assessment

Built for the AffordMed Campus Hiring Evaluation — Backend Track.

## What's Inside

- **logging_middleware** — A reusable logging package that sends structured logs to the AffordMed evaluation server. Built with Node.js and TypeScript.
- **notification_app_be** — A REST API built with Node.js and Express that fetches and prioritizes notifications from the AffordMed API.
- **notification_system_design.md** — System design responses covering REST API design, database schema, query optimization, caching strategy, and reliable notification delivery (Stages 1–5).
- **vehicle_maintence_scheduler** — Folder created as part of the pre-test setup.

## Tech Stack

- Node.js
- Express.js
- TypeScript (logging middleware)
- JavaScript (notification app)
- Axios
- dotenv

## Notification API (Stage 6)

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/notifications` | Get all notifications |
| GET | `/api/notifications/priority` | Get top 10 priority notifications |

Priority is calculated based on notification type weight (Placement > Result > Event) and recency.
