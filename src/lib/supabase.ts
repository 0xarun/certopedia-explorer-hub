
import { createClient } from '@supabase/supabase-js';

// Provide default values for development - replace these with your actual Supabase details
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Check if we have valid values
if (!supabaseUrl || supabaseUrl === 'https://your-project-url.supabase.co') {
  console.warn('Warning: Please set VITE_SUPABASE_URL in your environment variables');
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-anon-key') {
  console.warn('Warning: Please set VITE_SUPABASE_ANON_KEY in your environment variables');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
