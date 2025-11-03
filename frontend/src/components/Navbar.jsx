import { Menu, Bell, LogIn, LogOut } from "lucide-react";
import useApi from "../hooks/useApi";
import { api } from "../services/api";
import { useState, useEffect } from "react";
import { getXP, getLevelFromXP } from "../lib/gamify";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Navbar({ onToggleSidebar }) {
  const { data: cfg } = useApi(() => api.config.getAll(), []);
  const siteTitle = cfg?.siteTitle || "University Student Planner";
  const [xp, setXp] = useState(() => getXP());
  const [level, setLevel] = useState(() => getLevelFromXP(getXP()));
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onXp = (e) => {
      const next = (e && e.detail && typeof e.detail.xp === 'number') ? e.detail.xp : getXP();
      setXp(next);
      setLevel(getLevelFromXP(next));
    };
    window.addEventListener('xpChange', onXp);
    return () => window.removeEventListener('xpChange', onXp);
  }, []);

  // login greeting toast
  const [greet, setGreet] = useState(null);
  useEffect(() => {
    const onLogin = (e) => {
      const name = e?.detail?.user?.name || e?.detail?.user?.email || 'Player';
      setGreet(`Welcome back, ${name}!`);
      setTimeout(() => setGreet(null), 4500);
    };
    window.addEventListener('loginGreeting', onLogin);
    return () => window.removeEventListener('loginGreeting', onLogin);
  }, []);

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
      
      <div className="flex items-center gap-2 relative">
        {greet && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-md z-40">
            {greet}
          </div>
        )}
        <div className="hidden sm:flex items-center gap-3 mr-2 px-3 py-1 rounded-lg bg-secondary/40">
          <div className="text-xs text-muted-foreground">Lvl {level}</div>
          <div className="text-sm font-medium text-foreground">{xp} XP</div>
        </div>
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors relative">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </button>
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <div className="text-sm text-foreground hidden xs:block">{user?.name || user?.email}</div>
            <button onClick={async () => { await logout(); navigate('/login'); }} className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <LogOut className="h-5 w-5 text-foreground" />
            </button>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <LogIn className="h-5 w-5 text-foreground" />
          </button>
        )}
      </div>
    </header>
  );
}
