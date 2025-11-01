import { GraduationCap, BookOpen, User } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      name: "Advanced Data Bases",
      code: "TABD",
      instructor: "Dr. Ahmed Mansouri",
      semester: "Fall 2024",
      credits: 4,
      grade: "A-",
      color: "bg-blue-500/10 border-blue-500/30 text-blue-500",
    },
    {
      id: 2,
      name: "Software Engineering",
      code: "SE 101",
      instructor: "Prof. Fatima Benali",
      semester: "Fall 2024",
      credits: 4,
      grade: "B+",
      color: "bg-green-500/10 border-green-500/30 text-green-500",
    },
    {
      id: 3,
      name: "Project Management",
      code: "CS 150",
      instructor: "Dr. Karim Messaoudi",
      semester: "Fall 2024",
      credits: 3,
      grade: "A",
      color: "bg-purple-500/10 border-purple-500/30 text-purple-500",
    },
    {
      id: 4,
      name: "Advanced WEB Development",
      code: "ENG 200",
      instructor: "Ms. Amina Rahmouni",
      semester: "Fall 2024",
      credits: 3,
      grade: "B",
      color: "bg-orange-500/10 border-orange-500/30 text-orange-500",
    },
    {
      id: 5,
      name: "Development Of Concurrent Apps",
      code: "HIST 120",
      instructor: "Dr. Youcef Khelifa",
      semester: "Fall 2024",
      credits: 2,
      grade: "A-",
      color: "bg-red-500/10 border-red-500/30 text-red-500",
    },
  ];

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">My Courses</h2>
          <p className="text-muted-foreground mt-1">Fall 2025 Semester</p>
        </div>
        <div className="flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg">
          <GraduationCap className="h-4 w-4" />
          <span className="font-medium">{totalCredits} Total Credits</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`border-2 rounded-lg p-6 hover:shadow-lg transition-all ${course.color}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">{course.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{course.code}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{course.grade}</div>
                <p className="text-xs text-muted-foreground">{course.credits} credits</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>{course.semester}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
