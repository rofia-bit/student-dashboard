import { User, Bell, Palette, Shield } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Settings
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Update your personal information</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
            <input
              type="text"
              defaultValue="Student"
              className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input
              type="email"
              placeholder="your.email@university.dz"
              className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">University</label>
            <input
              type="text"
              placeholder="University name"
              className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Configure how you receive notifications</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-foreground">Task Reminders</p>
              <p className="text-sm text-muted-foreground">Get reminded about upcoming deadlines</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
          <div className="border-t border-border"></div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive email updates about your progress</p>
            </div>
            <input type="checkbox" className="w-5 h-5" />
          </div>
          <div className="border-t border-border"></div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-foreground">Achievement Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified when you unlock achievements</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Appearance
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Customize the look and feel</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-foreground">Dark Mode</p>
              <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
            </div>
            <input 
              type="checkbox" 
              className="w-5 h-5" 
              checked={isDarkMode}
              onChange={toggleTheme}
            />
          </div>
          <div className="border-t border-border"></div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-foreground">Pixel Art Characters</p>
              <p className="text-sm text-muted-foreground">Enable game-like pixel art visuals</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacy & Security
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Manage your account security</p>
        </div>
        <div className="space-y-3">
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
            Change Password
          </button>
          <div className="border-t border-border my-3"></div>
          <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg hover:bg-destructive/90 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
