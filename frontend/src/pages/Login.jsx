import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await login({ email, password });
      if (res) {
        // redirect home
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch {
      setError('Login error - please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-card border border-border rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-foreground mb-4">Welcome back</h2>
      <p className="text-sm text-muted-foreground mb-4">Log in to continue — welcome player, level up your day!</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        {error && <div className="text-sm text-destructive">{error}</div>}
        <div className="flex items-center gap-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
          <button type="button" onClick={() => { setEmail(''); setPassword(''); }} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
