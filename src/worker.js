/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


import { createClient } from '@supabase/supabase-js'

export default {
  async fetch(request, env) {
    const supabase = createClient('https://okcdtbcgnlcqkfenlsxi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rY2R0YmNnbmxjcWtmZW5sc3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NDU5ODEsImV4cCI6MjA1MzAyMTk4MX0.kp4UagmAdVDJzBlzqlp9IHjDh-gmFAWHId-C22r0QRI')
    const { data, error } = await supabase.from('countries').select('*')
    if (error) throw error
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}
