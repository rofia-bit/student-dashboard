import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const TaskContext = createContext(undefined);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api.tasks
      .getAll()
      .then((res) => {
        if (!mounted) return;
        setTasks(Array.isArray(res) ? res : []);
      })
      .catch((err) => {
        console.error("Failed to load tasks", err);
        if (mounted) setError(err);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const addTask = async (task) => {
    try {
      const created = await api.tasks.create(task);
      // If API returns created task, use it, otherwise append optimistic
      setTasks((prev) => [...prev, created || { id: Date.now(), ...task }]);
    } catch (err) {
      console.error("Create task failed", err);
      // optimistic local fallback
      setTasks((prev) => [...prev, { id: Date.now(), ...task }]);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.tasks.delete(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Delete task failed", err);
      // fallback local removal
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const toggleComplete = async (id) => {
    const target = tasks.find((t) => t.id === id);
    if (!target) return;
    const updated = { ...target, completed: !target.completed };
    try {
      await api.tasks.update(id, updated);
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (err) {
      console.error("Toggle task failed", err);
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    }
  };

  const updateTask = async (id, updates) => {
    const target = tasks.find((t) => t.id === id);
    if (!target) return;
    const merged = { ...target, ...updates };
    try {
      await api.tasks.update(id, merged);
      setTasks((prev) => prev.map((t) => (t.id === id ? merged : t)));
    } catch (err) {
      console.error("Update task failed", err);
      setTasks((prev) => prev.map((t) => (t.id === id ? merged : t)));
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleComplete, updateTask, loading, error }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}
