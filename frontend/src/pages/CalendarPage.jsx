import { Calendar, CheckCircle2, Clock, BookOpen } from "lucide-react";

export default function CalendarPage() {
  const upcomingEvents = [
    { id: 1, date: "Today", title: "Math Assignment 3 Due", course: "Calculus II", type: "assignment", time: "11:59 PM" },
    { id: 2, date: "Tomorrow", title: "Physics Midterm Exam", course: "Physics I", type: "exam", time: "2:00 PM" },
    { id: 3, date: "Friday", title: "English Essay Draft", course: "English Literature", type: "assignment", time: "11:59 PM" },
    { id: 4, date: "Next Monday", title: "CS Project Presentation", course: "Computer Science", type: "presentation", time: "10:00 AM" },
  ];

  const stats = [
    { label: "Events this week", value: "8", icon: Calendar },
    { label: "Exams coming up", value: "2", icon: Clock },
    { label: "Tasks completed", value: "12", icon: CheckCircle2 },
  ];

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
