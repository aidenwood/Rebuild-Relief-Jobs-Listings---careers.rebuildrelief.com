import { supabase } from "@/lib/supabase";
import { JobCard } from "@/components/job-card";
import type { Job } from "@/lib/types";
import { seedJobs } from "@/lib/seed-data";
import { Briefcase, Users, Home, TrendingUp } from "lucide-react";

export const revalidate = 60;

async function getJobs(): Promise<Job[]> {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error || !data || data.length === 0) {
    // Fall back to seed data when Supabase isn't connected
    return seedJobs;
  }

  return data;
}

export default async function HomePage() {
  const jobs = await getJobs();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-brand to-brand-dark text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Now Hiring Across NSW &amp; QLD
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build Your Career.
                <br />
                <span className="text-white/80">Rebuild Communities.</span>
              </h1>
              <p className="max-w-lg text-lg text-white/70">
                Join one of Australia&apos;s fastest-growing storm recovery
                companies. Help families restore their homes while earning a
                six-figure income.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Home className="h-4 w-4" />
                  3,000+ homes restored
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Users className="h-4 w-4" />
                  70+ team members
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <TrendingUp className="h-4 w-4" />
                  $150M+ claims approved
                </div>
              </div>
              <a
                href="#positions"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-white/90"
              >
                View Open Positions
              </a>
            </div>

            {/* YouTube Embed */}
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
              <iframe
                src="https://www.youtube.com/embed/x2vBglRBMYw?rel=0&modestbranding=1"
                title="Rebuild Relief — Who We Are"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 sm:px-6">
          {[
            { label: "Base Salary", value: "$70k+" },
            { label: "OTE First Year", value: "$100–150k" },
            { label: "Top Month Earnings", value: "$20k+" },
            { label: "Full Training", value: "Provided" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section id="positions" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">
              Open Positions
            </h2>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary">
              {jobs.length}
            </span>
          </div>

          {jobs.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-12 text-center">
              <Briefcase className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <p className="mt-4 text-lg font-medium">No open positions</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Check back soon — we&apos;re always growing.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
