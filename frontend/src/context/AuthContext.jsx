import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  const [loading, setLoading] = useState(!user);

  useEffect(() => {
    let mounted = true;
    const hasLocal = !!localStorage.getItem("user");
    if (!hasLocal) {
      setLoading(true);
      api.auth
        .me()
        .then((u) => {
          if (!mounted) return;
          if (u) {
            setUser(u);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(u));
          }
        })
        .catch(() => {
          // ignore, user not logged in or backend not reachable
        })
        .finally(() => mounted && setLoading(false));
    }
    return () => (mounted = false);
  }, []);

  const login = async (credentials) => {
    // credentials: { email, password }
    const res = await api.auth.login(credentials.email, credentials.password);
    // Expect backend to return user object
    if (res) {
      setUser(res);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(res));
    }
    return res;
  };

  const logout = async () => {
    try {
      await api.auth.logout();
    } catch {
      // ignore logout errors
    }
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
