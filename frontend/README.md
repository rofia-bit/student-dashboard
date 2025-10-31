# University Student Planner

A productivity and homework management system for university students in Algeria.  
Inspired by TDSB’s Homework Management System, this app helps students **organize tasks, track courses, monitor grades, and visualize progress** in one central dashboard.

---

## 🌟 Features

### Authentication
- Login using Google OAuth (for Google Calendar integration)
- Account setup in local database
- Profile and settings management

### Dashboard / Home
- Overview of **today’s tasks**
- Feed of recent activities (task added, progress updated)
- Mini calendar preview
- Quick navigation to other pages

### Courses
- List of all enrolled courses
- Course details: instructor, semester, metadata
- Grades and assignments overview per course

### Tasks
- Add, edit, delete tasks
- Tasks linked to courses or general
- Due date, description, attachments
- Calendar view (month/week/day) + list view
- Filter & search tasks
- “Due soon” widget

### Progress
- Track assignment completion and grades
- Weighted average calculation per course
- Graphs and charts showing progress over time
- Identify areas needing improvement

### Tools
- Dictionary or homework help tools
- Option to add more tools later

### Calendar Integration
- Sync tasks with Google Calendar
- Import/export .ics files

---

## 🛠️ Tech Stack

**Frontend:**
- React + Vite
- TailwindCSS for styling
- React Router DOM for routing
- react-big-calendar (calendar)
- react-datepicker (task due dates)
- recharts (progress graphs)
- @headlessui/react (modals)

**Backend (planned / optional for now):**
- FastAPI or Flask
- PostgreSQL database
- OAuth2 for Google login
- S3-compatible storage for attachments

---

## 📁 Project Structure (Frontend)

src/
├─ assets/ # logos, icons, images
├─ components/ # reusable UI components
│ ├─ Calendar/
│ ├─ Tasks/
│ ├─ Courses/
│ ├─ Charts/
│ ├─ Navbar.jsx
│ └─ Sidebar.jsx
├─ pages/ # route pages
│ ├─ Home.jsx
│ ├─ Tasks.jsx
│ ├─ Courses.jsx
│ ├─ Progress.jsx
│ └─ Settings.jsx
├─ layout/ # page wrappers
│ ├─ MainLayout.jsx
│ └─ AuthLayout.jsx
├─ context/ # global React Context
│ ├─ AuthContext.jsx
│ └─ TaskContext.jsx
├─ hooks/ # custom hooks
├─ services/ # API logic
├─ utils/ # helpers and constants
├─ App.jsx
├─ main.jsx
└─ index.css

yaml
Copy code

---

## 🚀 Getting Started (Frontend)

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/student-planner-frontend.git
cd student-planner-frontend
Install dependencies

bash
Copy code
npm install
Run development server

bash
Copy code
npm run dev
Open your browser at http://localhost:5173

🎨 UI / UX Inspiration
Dribbble: student dashboard UI, task manager dashboard

Figma: student planner dashboard template

Google Classroom / Notion dashboard layouts

Focus on sidebars, top navigation, cards, calendar views, and graphs

🗂️ Development Roadmap
Phase 0 – Setup
React + Tailwind + Router

Folder structure

Phase 1 – Core MVP
Auth with Google OAuth

CRUD for tasks & courses

Calendar view

Today’s tasks preview

Phase 2 – Progress & Charts
Grade items & grades

Weighted averages

Graphs for assignments & course completion

Phase 3 – Calendar Sync & File Uploads
Google Calendar integration

Attachments storage

Phase 4 – Polish & Deploy
Profile and settings page

Responsive design & mobile support

Deployment to Vercel / Render / DigitalOcean

Terms of Service & Privacy Policy

🔑 Notes & Tips
Keep components small and reusable

Use context/hooks for global state (auth, tasks)

Tailwind makes responsive design easier

Use mock API before backend is ready

Prototype in Figma before implementing complex layouts

📜 License
MIT License – free to use and contribute.

yaml
Copy code

---

If you want, I can also **write a slightly shorter, GitHub-ready version with badges, table of contents, and setup commands** so it looks super professional and clickable in the repo.  

Do you want me to do that next?act/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
