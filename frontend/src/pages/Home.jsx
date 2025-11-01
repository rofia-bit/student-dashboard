/* eslint-disable no-unused-vars */
import { CheckCircle2, Clock, BookOpen, Plus, Star, Trophy, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MOTIVATIONAL_MESSAGES } from "../utils/constants";

export default function Home() {
  const navigate = useNavigate();

  const userLevel = 8;
  const currentXP = 650;
  const xpToNextLevel = 1000;
  const xpProgress = (currentXP / xpToNextLevel) * 100;
  const studyStreak = 5;
  const totalPoints = 2450;

  const stats = [
    { title: "Tasks Due Today", value: "3", icon: Clock, color: "text-orange-500", bgColor: "bg-orange-500/10", points: "+10 XP each" },
    { title: "Completed This Week", value: "12", icon: CheckCircle2, color: "text-green-500", bgColor: "bg-green-500/10", points: "+120 XP" },
    { title: "Active Courses", value: "5", icon: BookOpen, color: "text-blue-500", bgColor: "bg-blue-500/10", points: "Keep going!" },
    { title: "Study Streak", value: `${studyStreak} days`, icon: Zap, color: "text-yellow-500", bgColor: "bg-yellow-500/10", points: "+50 XP bonus" },
  ];

  const achievements = [
    { id: 1, title: "First Steps", description: "Complete your first task", earned: true, icon: Star },
    { id: 2, title: "Week Warrior", description: "Study for 7 days straight", earned: true, icon: Trophy },
    { id: 3, title: "Task Master", description: "Complete 50 tasks", earned: false, icon: CheckCircle2 },
  ]; //non used yet just an idea

  const upcomingTasks = [
    { id: 1, title: "Math Assignment 3", course: "Calculus II", dueDate: "Today, 11:59 PM", priority: "high", xp: 30 },
    { id: 2, title: "Physics Lab Report", course: "Physics I", dueDate: "Tomorrow, 5:00 PM", priority: "medium", xp: 20 },
    { id: 3, title: "Essay Draft", course: "English Literature", dueDate: "Friday, 11:59 PM", priority: "low", xp: 15 },
  ];

  return (
    <div className="space-y-6">
      {/* Character & Level Section 
      <div className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          Character Avatar :
          <div className="relative">
            <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-background shadow-lg">
              {userLevel}
            </div>
          </div>

           Level & XP Info :
          <div className="flex-1 w-full space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  Study Hero
                  <Trophy className="h-6 w-6 text-yellow-500" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  {MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)]}
                </p>
              </div>
              <button 
                onClick={() => navigate("/tasks")} 
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-4 w-4" />
                New Quest
              </button>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">Level {userLevel}</span>
                <span className="text-muted-foreground">{currentXP} / {xpToNextLevel} XP</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${xpProgress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {xpToNextLevel - currentXP} XP until Level {userLevel + 1}
              </p>
            </div>

            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="font-medium text-foreground">{totalPoints} Points</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span className="font-medium text-foreground">{studyStreak} Day Streak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.points}</p>
          </div>
        ))}
      </div>

      {/* Achievements 
      <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mt-1">Unlock rewards by completing challenges</p>
      </div>
       */}
       
      {/* Active Quests */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            Active Quests
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Complete tasks to earn XP!</p>
        </div>
        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start justify-between p-4 rounded-lg border-2 border-border hover:border-primary/30 hover:bg-secondary/50 transition-all cursor-pointer group"
              onClick={() => navigate("/tasks")}
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{task.title}</h4>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      task.priority === "high"
                        ? "bg-red-500/10 text-red-500"
                        : task.priority === "medium"
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-gray-500/10 text-gray-500"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{task.course}</p>
                <div className="flex items-center gap-1 text-xs font-medium text-yellow-500">
                  <Star className="h-3 w-3" />
                  +{task.xp} XP
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{task.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
