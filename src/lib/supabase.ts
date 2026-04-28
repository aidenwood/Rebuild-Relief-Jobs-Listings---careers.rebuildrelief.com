import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Only used by admin API routes — public pages use static data from jobs.ts */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
