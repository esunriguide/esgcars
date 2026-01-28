
import { createClient } from "@supabase/supabase-js";

// Your Supabase credentials
const supabaseUrl = "https://uwnongvbesdmztixsfnl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bm9uZ3ZiZXNkbXp0aXhzZm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NDM4OTIsImV4cCI6MjA4NDMxOTg5Mn0.cCO4WnC-fOIeoJ1cDRTjDCjB9k1zXzV-J2dd0iq6pOI";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
