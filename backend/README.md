# Mock Backend for Student Dashboard

This mock backend is a tiny Express server that provides the API endpoints the frontend expects. It runs in-memory and is intended for local development and testing.

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

