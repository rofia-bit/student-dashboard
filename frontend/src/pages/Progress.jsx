import { TrendingUp, TrendingDown, Award, Target } from "lucide-react";

export default function Progress() {
  const progressData = [
    {
      course: "Advanced Data Bases",
      currentGrade: 88,
      previousGrade: 82,
      trend: "up",
      assignments: { completed: 10, total: 12 },
    },
    {
      course: "Software Engineering",
      currentGrade: 85,
      previousGrade: 87,
      trend: "down",
      assignments: { completed: 8, total: 10 },
    },
    {
      course: "Project Management",
      currentGrade: 92,
      previousGrade: 90,
      trend: "up",
      assignments: { completed: 12, total: 14 },
    },
    {
      course: "Advanced WEB Development",
      currentGrade: 80,
      previousGrade: 78,
      trend: "up",
      assignments: { completed: 6, total: 8 },
    },
  ];

  const overallAverage = Math.round(
    progressData.reduce((sum, item) => sum + item.currentGrade, 0) / progressData.length
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Academic Progress</h2>
        <p className="text-muted-foreground mt-1">Track your performance and improvement</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Overall Average</h3>
            <Award className="h-4 w-4 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground">{overallAverage}%</div>
          <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +3% from last month
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Assignments Completed</h3>
            <Target className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-foreground">36/44</div>
          <p className="text-xs text-muted-foreground mt-1">82% completion rate</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Study Streak</h3>
            <TrendingUp className="h-4 w-4 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-foreground">12 days</div>
          <p className="text-xs text-muted-foreground mt-1">Keep it up!</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Course Performance</h3>
        <div className="space-y-6">
          {progressData.map((course) => (
            <div key={course.course} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{course.course}</h4>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <span>{course.assignments.completed}/{course.assignments.total} assignments</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">{course.currentGrade}%</span>
                  {course.trend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${course.currentGrade}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Insights & Recommendations</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <p className="text-sm text-foreground">
              <span className="font-medium">Great work!</span> Your performance in Computer Science has improved by 2 points.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
            <p className="text-sm text-foreground">
              <span className="font-medium">Focus area:</span> Physics grade has slightly decreased. Consider reviewing recent topics.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-foreground">
              <span className="font-medium">On track:</span> You're maintaining a strong overall average. Keep up the consistent effort!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
