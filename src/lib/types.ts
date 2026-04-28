export interface Job {
  id: string;
  title: string;
  slug: string;
  location: string;
  department: string;
  job_type: string;
  salary_range: string;
  description: string;
  seek_url: string | null;
  status: "active" | "closed";
  created_at: string;
  updated_at: string;
}

export interface JobFormData {
  title: string;
  location: string;
  department: string;
  job_type: string;
  salary_range: string;
  description: string;
  seek_url: string;
  status: "active" | "closed";
}
