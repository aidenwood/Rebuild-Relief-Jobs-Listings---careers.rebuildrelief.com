import { getActiveJobs, getJobBySlug } from "@/lib/jobs";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Clock,
  DollarSign,
  Building2,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { JobDescription } from "@/components/job-description";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getActiveJobs().map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) return { title: "Job Not Found | Rebuild Relief" };

  return {
    title: `${job.title} — ${job.location} | Rebuild Relief Careers`,
    description: `${job.title} at Rebuild Relief in ${job.location}. ${job.salary_range}. Apply now.`,
  };
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all positions
      </Link>

      <div className="rounded-xl border bg-card p-6 sm:p-10">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {job.title}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Rebuild Relief
            </p>
          </div>
          <Badge
            variant={job.status === "active" ? "default" : "secondary"}
            className="text-sm"
          >
            {job.status === "active" ? "Actively Hiring" : "Closed"}
          </Badge>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5 text-sm">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5 text-sm">
            <Building2 className="h-4 w-4 text-primary shrink-0" />
            <span>{job.department}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5 text-sm">
            <Clock className="h-4 w-4 text-primary shrink-0" />
            <span>{job.job_type}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5 text-sm">
            <DollarSign className="h-4 w-4 text-primary shrink-0" />
            <span className="font-medium">{job.salary_range}</span>
          </div>
        </div>

        <Separator className="mb-8" />

        <JobDescription text={job.description} />

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 sm:flex-row">
          {job.seek_url && (
            <a href={job.seek_url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Apply on Seek
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
          <Link href="/">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View All Positions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
