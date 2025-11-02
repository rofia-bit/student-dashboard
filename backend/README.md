# Mock Backend for Student Dashboard

This mock backend is a tiny Express server that provides the API endpoints the frontend expects. It runs in-memory and is intended for local development and testing.

Available endpoints

- GET /api/config -> returns site configuration (menuItems, siteTitle, courseColors, currentSemester, motivationalMessages)
- GET /api/tasks -> returns list of tasks
- POST /api/tasks -> create a task (returns created task)
- PUT /api/tasks/:id -> update a task
- DELETE /api/tasks/:id -> delete a task (204)
- GET /api/courses -> returns list of courses
- GET /api/stats -> returns aggregated stats and progress
- POST /api/auth/login -> accepts { email, password } and returns { user, token }
- POST /api/auth/logout -> returns 204
- GET /api/auth/me -> returns current user when Authorization: Bearer <token> header is present

Run locally

1. From `backend/` install dependencies:

```bash
cd backend
npm install
```

2. Start the server (dev mode with nodemon):

```bash
npm run dev
```

Server will listen on http://localhost:4000 by default.

Point the frontend to the mock backend

Set the frontend environment variable `VITE_API_BASE_URL` to `http://localhost:4000` when running the frontend dev server.

