import Image from "next/image";
import Link from "next/link";
import { getActiveJobs } from "@/lib/jobs";
import { MapPin, Phone, Mail, Users, Home, TrendingUp } from "lucide-react";

export function Footer() {
  const jobs = getActiveJobs();
  const locations = [...new Set(jobs.map((j) => j.location))];

  return (
    <footer className="border-t bg-[#001B51] text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Image
                  src="/favicon.svg"
                  alt="Rebuild Relief"
                  width={24}
                  height={22}
                  className="h-[22px] w-auto"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-none">
                  Rebuild Relief
                </p>
                <p className="text-xs text-white/50 leading-none mt-0.5">
                  Careers
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              A rapidly growing Australian storm and hail damage recovery
              company. 3,000+ homes restored. $150M+ in insurance claims
              managed across NSW &amp; QLD.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <Home className="h-3 w-3" /> 3,000+ homes
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3 w-3" /> 70+ team
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="h-3 w-3" /> $150M+ claims
              </span>
            </div>
          </div>

          {/* Open positions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">
              Open Positions
            </h3>
            <ul className="space-y-2">
              {jobs.map((job) => (
                <li key={job.id}>
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {job.title}{" "}
                    <span className="text-white/40">
                      — {job.location.split(",")[0]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hiring locations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">
              Hiring Locations
            </h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li
                  key={loc}
                  className="flex items-start gap-2 text-sm"
                >
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-brand-cyan" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.rebuildrelief.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                rebuildrelief.com.au
              </a>
              <a
                href="mailto:careers@rebuildrelief.com.au"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                careers@rebuildrelief.com.au
              </a>
              <a
                href="tel:1300732845"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                1300 REBUILD
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Rebuild Relief Pty Ltd. All
              rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-white/40">
              <a
                href="https://www.seek.com.au/Rebuild-Relief-jobs/at-this-company"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                Seek Profile
              </a>
              <a
                href="https://www.rebuildrelief.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                Main Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
