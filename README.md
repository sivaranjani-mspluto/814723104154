# AffordMed Backend Assessment

Built for the AffordMed Campus Hiring Evaluation — Backend Track.

## What's Inside

- **notification_app_be** — A REST API built with Node.js and Express that fetches and prioritizes notifications from the AffordMed API.
- **notification_system_design.md** — (just the file structure) System design responses covering REST API design, database schema, query optimization, caching strategy, and reliable notification delivery (Stages 1–5).
- **vehicle_maintence_scheduler** — (just the file structure) Folder created as part of the pre-test setup.

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

##NOTES
- This submission covers the Backend Track only (Stages 6). Stage 7 frontend is not included.
