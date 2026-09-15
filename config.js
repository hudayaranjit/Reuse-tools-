// Supabase Client Configuration
const SUPABASE_URL = "https://ybngxdvgpvedzzzgbcdw.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY"; // Paste your anon public key here

let supabaseClient = null;

function initSupabase() {
  if (typeof supabase !== 'undefined' && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY") {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("⚡ Supabase connected successfully!");
    return true;
  }
  console.log("ℹ️ Running with LocalStorage / Fallback DB. Add SUPABASE_ANON_KEY in config.js to sync to cloud.");
  return false;
}
