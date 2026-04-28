import Link from "next/link";
import { MapPin, Clock, DollarSign, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Job } from "@/lib/types";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const postedDate = new Date(job.created_at);
  const daysAgo = Math.floor(
    (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const postedText =
    daysAgo === 0
      ? "Today"
      : daysAgo === 1
        ? "Yesterday"
        : `${daysAgo}d ago`;

  return (
    <Card className="group flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
            {job.title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs">
            {postedText}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-2 pb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-3.5 w-3.5 shrink-0" />
          <span>{job.department}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5 shrink-0" />
          <span>{job.job_type}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <DollarSign className="h-3.5 w-3.5 shrink-0" />
          <span>{job.salary_range}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/jobs/${job.slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
