"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Job, JobFormData } from "@/lib/types";

interface JobFormProps {
  job?: Job;
  onSave: (data: JobFormData) => Promise<void>;
  onCancel: () => void;
}

export function JobForm({ job, onSave, onCancel }: JobFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<JobFormData>({
    title: job?.title ?? "",
    location: job?.location ?? "",
    department: job?.department ?? "",
    job_type: job?.job_type ?? "Full time",
    salary_range: job?.salary_range ?? "",
    description: job?.description ?? "",
    seek_url: job?.seek_url ?? "",
    status: job?.status ?? "active",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await onSave(formData);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="e.g. Sales Representative"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="e.g. Penrith, Sydney NSW"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Input
            id="department"
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
            placeholder="e.g. Sales"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="job_type">Job Type</Label>
          <Select
            value={formData.job_type}
            onValueChange={(val) =>
              val && setFormData({ ...formData, job_type: val })
            }
          >
            <SelectTrigger id="job_type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full time">Full time</SelectItem>
              <SelectItem value="Part time">Part time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Casual">Casual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select
            value={formData.status}
            onValueChange={(val) =>
              val &&
              setFormData({
                ...formData,
                status: val as "active" | "closed",
              })
            }
          >
            <SelectTrigger id="status">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="salary_range">Salary Range</Label>
          <Input
            id="salary_range"
            value={formData.salary_range}
            onChange={(e) =>
              setFormData({ ...formData, salary_range: e.target.value })
            }
            placeholder="e.g. $70k Base + Uncapped Comms"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="seek_url">Seek URL</Label>
          <Input
            id="seek_url"
            value={formData.seek_url}
            onChange={(e) =>
              setFormData({ ...formData, seek_url: e.target.value })
            }
            placeholder="https://www.seek.com.au/job/..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Job Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Full job description..."
          rows={16}
          required
        />
        <p className="text-xs text-muted-foreground">
          Use line breaks to separate paragraphs. Lines starting with uppercase
          and under 80 chars will render as section headers.
        </p>
      </div>

      <div className="flex gap-3 justify-end pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : job ? "Update Listing" : "Create Listing"}
        </Button>
      </div>
    </form>
  );
}
