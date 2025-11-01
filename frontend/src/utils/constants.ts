export const PRIORITY_COLORS = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-warning/10 text-warning",
  low: "bg-muted text-muted-foreground",
} as const;

export const GRADE_COLORS = {
  A: "bg-success/10 text-success",
  B: "bg-primary/10 text-primary",
  C: "bg-warning/10 text-warning",
  D: "bg-destructive/10 text-destructive",
} as const;

export const XP_VALUES = {
  taskComplete: 25,
  highPriorityTask: 30,
  mediumPriorityTask: 20,
  lowPriorityTask: 15,
  studyStreakBonus: 50,
} as const;

export const MOTIVATIONAL_MESSAGES = [
  "You're on fire! 🔥",
  "Keep up the great work!",
  "Level up your knowledge!",
  "Every task completed makes you stronger!",
  "You're unstoppable!",
  "Great progress today!",
] as const;
