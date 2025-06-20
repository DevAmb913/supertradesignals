// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Retrieve Supabase URL and Key from environment variables
// Make sure your .env.local file has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// You can now import 'supabase' from this file into your React components
// For example: import { supabase } from './supabaseClient';