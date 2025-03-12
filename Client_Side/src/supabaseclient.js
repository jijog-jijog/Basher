import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wvvenjafahiqgxoxktlv.supabase.co";  // Replace with your actual Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2dmVuamFmYWhpcWd4b3hrdGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1ODcwMTAsImV4cCI6MjA1NzE2MzAxMH0.NfDV5tXWYbSAARNGQCtXbbm1eYYwons9iS66hELf21A";  // Replace with your actual Supabase Key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
