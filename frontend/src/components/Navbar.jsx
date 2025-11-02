import { Menu, Bell, User } from "lucide-react";
import useApi from "../hooks/useApi";
import { api } from "../services/api";

export function Navbar({ onToggleSidebar }) {
  const { data: cfg } = useApi(() => api.config.getAll(), []);
  const siteTitle = cfg?.siteTitle || "University Student Planner";

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-4 sm:px-6 bg-card sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>
        <h1 className="text-lg sm:text-xl font-semibold text-foreground hidden xs:block">{siteTitle}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors relative">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <User className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </header>
  );
}
