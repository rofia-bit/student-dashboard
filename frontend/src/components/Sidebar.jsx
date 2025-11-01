import { Home, CheckSquare, BookOpen, TrendingUp, Calendar, Settings, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Courses", url: "/courses", icon: BookOpen },
  { title: "Progress", url: "/progress", icon: TrendingUp },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function Sidebar({ isOpen, onToggle }) {
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 z-50 ${
          isOpen ? "translate-x-0 w-64" : "lg:translate-x-0 -translate-x-full lg:w-16"
        }`}
      >
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          {isOpen && (
            <span className="font-bold text-lg text-foreground">Nerd Out</span>
          )}
        </div>
      </div>

      <nav className="p-2 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end={item.url === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {isOpen && <span className="font-medium">{item.title}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
    </>
  );
}
