import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Clock, BookOpen } from "lucide-react";

export function CourseCard({ course }) {
  return (
    <Card className="hover:shadow-lg transition-all">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-xl">{course.name}</CardTitle>
            <CardDescription className="text-base">{course.code}</CardDescription>
          </div>
          <Badge className={`${course.color} border-0`}>{course.grade}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{course.semester}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{course.credits} Credits</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Assignments</span>
            <span className="font-medium text-foreground">8 completed / 12 total</span>
          </div>
          <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "66%" }} />
          </div>
        </div>

        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
