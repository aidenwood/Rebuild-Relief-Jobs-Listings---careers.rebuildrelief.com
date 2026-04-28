-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  location TEXT NOT NULL,
  department TEXT NOT NULL,
  job_type TEXT NOT NULL DEFAULT 'Full time',
  salary_range TEXT NOT NULL,
  description TEXT NOT NULL,
  seek_url TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'closed')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Public read access for active jobs
CREATE POLICY "Anyone can read active jobs"
  ON jobs FOR SELECT
  USING (status = 'active');

-- Allow anon key full access (admin auth is handled at the API layer)
CREATE POLICY "Authenticated users can manage jobs"
  ON jobs FOR ALL
  USING (true)
  WITH CHECK (true);

-- Index for slug lookups
CREATE INDEX IF NOT EXISTS idx_jobs_slug ON jobs (slug);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs (status);
