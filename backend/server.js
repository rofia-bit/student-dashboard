const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// in-memory mock data
let tasks = [
  { id: 1, title: 'Complete database assignment', description: 'Sdo TD1 and TP1', course: 'Advanced Data Bases', dueDate: '2025-11-15', priority: 'high', completed: false },
  { id: 2, title: 'web dev project', description: 'an admin page mini project', course: 'Advanced Web Development', dueDate: '2025-11-18', priority: 'medium', completed: false },
  { id: 3, title: 'GL homework', description: 'Read and take notes on TD 1-2-3', course: 'Software Engineering', dueDate: '2025-11-20', priority: 'low', completed: true },
];

let courses = [
  { id: 1, name: 'Advanced Data Bases', code: 'TABD', instructor: 'Dr. Ahmed Mansouri', semester: 'Fall 2025', credits: 4, grade: 'A-' , color: 'bg-blue-500/10 border-blue-500/30 text-blue-500'},
  { id: 2, name: 'Software Engineering', code: 'SE101', instructor: 'Prof. Fatima Benali', semester: 'Fall 2025', credits: 4, grade: 'B+' , color: 'bg-green-500/10 border-green-500/30 text-green-500'},
];

const config = {
  siteTitle: 'University Student Planner (Mock)',
  menuItems: [
    { title: 'Dashboard', url: '/' },
    { title: 'Tasks', url: '/tasks' },
    { title: 'Courses', url: '/courses' },
    { title: 'Progress', url: '/progress' },
    { title: 'Calendar', url: '/calendar' },
    { title: 'Settings', url: '/settings' },
  ],
  courseColors: {
    TABD: 'bg-blue-500/10 border-blue-500/30 text-blue-500',
    SE101: 'bg-green-500/10 border-green-500/30 text-green-500'
  },
  currentSemester: 'Fall 2025 Semester',
  motivationalMessages: [
    "You're doing good!",
    'Keep up the great work!',
    'Level up your knowledge!'
  ]
};

const stats = {
  userLevel: 8,
  currentXP: 650,
  xpToNextLevel: 1000,
  studyStreak: 5,
  totalPoints: 2450,
  tasksDueToday: 3,
  completedThisWeek: 12,
  activeCourses: 2,
  progress: [
    { course: 'Advanced Data Bases', currentGrade: 88, previousGrade: 82, trend: 'up', assignments: { completed: 10, total: 12 } },
    { course: 'Software Engineering', currentGrade: 85, previousGrade: 87, trend: 'down', assignments: { completed: 8, total: 10 } }
  ],
  eventsThisWeek: 8,
  examsComingUp: 2,
  tasksCompleted: 36,
  achievements: [
    { id: 1, title: 'First Steps', description: 'Complete your first task', earned: true },
  ]
};

// Mock users and sessions store
const USERS = [
  { id: 1, name: 'Student', email: 'student@example.com', password: 'password123' },
  { id: 2, name: 'Test User', email: 'test@example.com', password: 'test123' }
];

const sessions = {}; // token -> user

// Helper to find user by credentials
function findUser(email, password) {
  return USERS.find(u => u.email === email && u.password === password);
}

// Remove password from user object before sending to client
function sanitizeUser(user) {
  const { password, ...safe } = user;
  return safe;
}

// Routes
app.get('/api/config', (req, res) => {
  res.json(config);
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const task = req.body;
  const id = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  const created = { id, ...task };
  tasks.push(created);
  res.status(201).json(created);
});

app.put('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  tasks[idx] = { ...tasks[idx], ...req.body };
  res.json(tasks[idx]);
});

app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.status(204).end();
});

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  
  const user = findUser(email, password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Create session
  const token = `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const safeUser = sanitizeUser(user);
  sessions[token] = safeUser;

  // Return user (without password) and token
  res.json({ user: safeUser, token });
});

app.post('/api/auth/logout', (req, res) => {
  const auth = req.headers.authorization || '';
  if (auth.startsWith('Bearer ')) {
    const token = auth.replace('Bearer ', '').trim();
    delete sessions[token]; // Remove session
  }
  res.status(204).end();
});

app.get('/api/auth/me', (req, res) => {
  const auth = req.headers.authorization || '';
  if (auth.startsWith('Bearer ')) {
    const token = auth.replace('Bearer ', '').trim();
    const user = sessions[token];
    if (user) return res.json(user);
  }
  return res.status(401).json({ error: 'Not authenticated' });
});

app.listen(port, () => {
  console.log(`Mock backend listening at http://localhost:${port}`);
});
