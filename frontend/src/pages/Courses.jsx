import { GraduationCap, BookOpen, User } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import DEFAULTS from "../utils/constants";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let mounted = true;
    api.courses
      .getAll()
      .then((res) => {
        if (!mounted) return;
        setCourses(Array.isArray(res) ? res : []);
      })
      .catch((e) => {
        console.error("Failed to load courses", e);
      })
      .finally(() => mounted && null);
    return () => (mounted = false);
  }, []);

  // load course color overrides from config
  const [courseColors, setCourseColors] = useState({});
  useEffect(() => {
    let mounted = true;
    api.config
      .getAll()
      .then((cfg) => {
        if (!mounted || !cfg) return;
        if (cfg.courseColors && typeof cfg.courseColors === 'object') {
          setCourseColors(cfg.courseColors);
        }
      })
      .catch(() => {});
    return () => (mounted = false);
  }, []);

  const totalCredits = courses.reduce((sum, course) => sum + (course.credits || 0), 0);

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
        {courses.map((course) => {
          const gradeKey = String(course.grade || "").charAt(0).toUpperCase();
          const fallbackColor = DEFAULTS.GRADE_COLORS?.[gradeKey] ?? "bg-muted";
          const colorClass = course.color || courseColors[course.code] || fallbackColor;
          return (
            <div
              key={course.id}
              className={`border-2 rounded-lg p-6 hover:shadow-lg transition-all ${colorClass}`}
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
          );
        })}
      </div>
    </div>
  );
}
