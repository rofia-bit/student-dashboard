# University Student Planner

A productivity and homework management system for university students in Algeria.  
this app helps students **organize tasks, track courses, monitor grades, and visualize progress** in one central dashboard.

---

##  Features

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


## check it out : 
1. **Clone the repo**
```bash
git clone https://github.com/yourusername/student-dashboard
cd frontend

npm install

npm run dev
```
