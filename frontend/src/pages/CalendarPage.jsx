import { Calendar, CheckCircle2, Clock, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function CalendarPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [stats, setStats] = useState([
    { label: "Events this week", value: "-", icon: Calendar },
    { label: "Exams coming up", value: "-", icon: Clock },
    { label: "Tasks completed", value: "-", icon: CheckCircle2 },
  ]);

  useEffect(() => {
    let mounted = true;
    api.tasks
      .getAll()
      .then((tasks) => {
        if (!mounted) return;
        if (Array.isArray(tasks)) {
          // Map tasks to simple events (take first 6 upcoming)
          const events = tasks.slice(0, 6).map((t) => ({
            id: t.id,
            date: t.dueDate || "TBD",
            title: t.title,
            course: t.course || "",
            type: t.type || "assignment",
            time: t.time || "",
          }));
          setUpcomingEvents(events);
        }
      })
      .catch(() => {});

    api.stats
      .get()
      .then((s) => {
        if (!mounted || !s) return;
        setStats([
          { label: "Events this week", value: s.eventsThisWeek ?? "-", icon: Calendar },
          { label: "Exams coming up", value: s.examsComingUp ?? "-", icon: Clock },
          { label: "Tasks completed", value: s.tasksCompleted ?? "-", icon: CheckCircle2 },
        ]);
      })
      .catch(() => {});

    return () => (mounted = false);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Calendar</h2>
        <p className="text-muted-foreground mt-1">View and manage your schedule</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground">Upcoming Events</h3>
          <p className="text-sm text-muted-foreground mt-1">Your schedule for the next few days</p>
        </div>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
            >
              <div className="text-center min-w-[80px]">
                <p className="text-sm font-medium text-primary">{event.date}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-foreground">{event.title}</h4>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      event.type === "exam"
                        ? "bg-red-500/10 text-red-500"
                        : event.type === "presentation"
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {event.course}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
