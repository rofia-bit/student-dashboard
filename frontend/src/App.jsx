import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";
import { MainLayout } from "./layout/MainLayout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Courses from "./pages/Courses";
import Progress from "./pages/Progress";
import CalendarPage from "./pages/CalendarPage";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => (
  <AuthProvider>
    <TaskProvider>
      <ThemeProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/tasks" element={<MainLayout><Tasks /></MainLayout>} />
          <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
          <Route path="/progress" element={<MainLayout><Progress /></MainLayout>} />
          <Route path="/calendar" element={<MainLayout><CalendarPage /></MainLayout>} />
          <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </TaskProvider>
  </AuthProvider>
);

export default App;
