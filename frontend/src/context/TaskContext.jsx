import { createContext, useContext, useState } from "react";

const TaskContext = createContext(undefined);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Math Assignment",
      description: "Solve problems 1-15 from Chapter 4",
      course: "Calculus II",
      dueDate: "2024-11-15",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Physics Lab Report",
      description: "Write lab report for electricity experiment",
      course: "Physics I",
      dueDate: "2024-11-18",
      priority: "medium",
      completed: false,
    },
    {
      id: 3,
      title: "Read Chapter 5",
      description: "Read and take notes on Chapter 5",
      course: "English Literature",
      dueDate: "2024-11-20",
      priority: "low",
      completed: true,
    },
  ]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id, updates) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleComplete, updateTask }}
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
