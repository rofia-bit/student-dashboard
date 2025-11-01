export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function calculateProgress(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function getGradeColor(grade: number): string {
  if (grade >= 90) return "bg-success";
  if (grade >= 80) return "bg-primary";
  if (grade >= 70) return "bg-warning";
  return "bg-destructive";
}

export function getPriorityLevel(priority: "low" | "medium" | "high"): number {
  const levels = { low: 1, medium: 2, high: 3 };
  return levels[priority];
}
