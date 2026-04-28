"use client";

import { useEffect, useState, useCallback } from "react";
import { LoginForm } from "@/components/login-form";
import { JobForm } from "@/components/job-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  MapPin,
  ExternalLink,
} from "lucide-react";
import type { Job, JobFormData } from "@/lib/types";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchJobs = useCallback(async () => {
    const res = await fetch("/api/jobs");
    if (res.ok) {
      const data = await res.json();
      setJobs(data);
    }
  }, []);

  // Check auth on mount
  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/jobs");
      if (res.ok) {
        setAuthenticated(true);
        const data = await res.json();
        setJobs(data);
      } else {
        setAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  function handleLoginSuccess() {
    setAuthenticated(true);
    fetchJobs();
  }

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    setAuthenticated(false);
    setJobs([]);
  }

  async function handleSave(data: JobFormData) {
    if (editingJob) {
      await fetch(`/api/jobs/${editingJob.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } else {
      await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    setShowForm(false);
    setEditingJob(null);
    fetchJobs();
  }

  async function handleDelete(id: string) {
    setDeleting(id);
    await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    setDeleting(null);
    fetchJobs();
  }

  // Loading state
  if (authenticated === null) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  // Not authenticated
  if (!authenticated) {
    return <LoginForm onSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Manage Job Listings
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {jobs.length} listing{jobs.length !== 1 ? "s" : ""} total
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              setEditingJob(null);
              setShowForm(true);
            }}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Listing
          </Button>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Job list */}
      <div className="space-y-3">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base">{job.title}</CardTitle>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span>{job.salary_range}</span>
                    <span>{job.job_type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge
                    variant={job.status === "active" ? "default" : "secondary"}
                  >
                    {job.status}
                  </Badge>
                  {job.seek_url && (
                    <a
                      href={job.seek_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on Seek"
                    >
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => {
                      setEditingJob(job);
                      setShowForm(true);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => handleDelete(job.id)}
                    disabled={deleting === job.id}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {job.description.slice(0, 200)}...
              </p>
            </CardContent>
          </Card>
        ))}

        {jobs.length === 0 && (
          <div className="rounded-lg border border-dashed p-12 text-center">
            <p className="text-lg font-medium">No listings yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Click &quot;Add Listing&quot; to create your first job post.
            </p>
          </div>
        )}
      </div>

      {/* Form dialog */}
      <Dialog
        open={showForm}
        onOpenChange={(open) => {
          if (!open) {
            setShowForm(false);
            setEditingJob(null);
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingJob ? "Edit Listing" : "New Job Listing"}
            </DialogTitle>
          </DialogHeader>
          <JobForm
            job={editingJob ?? undefined}
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingJob(null);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
