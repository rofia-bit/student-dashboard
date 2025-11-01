import { TrendingUp, TrendingDown } from "lucide-react";

export function ProgressChart({ data }) {
  return (
    <div className="space-y-6">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="font-medium text-foreground">{item.course}</h4>
              <p className="text-sm text-muted-foreground">
                {item.assignments.completed} of {item.assignments.total} assignments completed
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">{item.currentGrade}%</div>
                <div
                  className={`text-xs flex items-center gap-1 ${
                    item.trend === "up" ? "text-success" : "text-destructive"
                  }`}
                >
                  {item.trend === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(item.currentGrade - item.previousGrade)}%
                </div>
              </div>
            </div>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${
                item.currentGrade >= 90
                  ? "bg-success"
                  : item.currentGrade >= 80
                  ? "bg-primary"
                  : item.currentGrade >= 70
                  ? "bg-warning"
                  : "bg-destructive"
              }`}
              style={{ width: `${item.currentGrade}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
