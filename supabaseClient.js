// supabaseClient.js
// ===============================================
// CONFIGURAÇÃO DO SUPABASE
// ===============================================
// Use variáveis de ambiente no Vercel quando subir para produção.
// Em desenvolvimento, pode deixar os valores abaixo (mas evite expor a chave publicamente).

const SUPABASE_URL = window.SUPABASE_URL || 'https://zsoxlkuyrysytusncuxf.supabase.co';
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzb3hsa3V5cnlzeXR1c25jdXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4OTc4MjMsImV4cCI6MjA3MzQ3MzgyM30.HeHE1O6yVu-IiB4y8VztS0YLBruqOnnGcmk2TG2IHp0';

// Cria o cliente Supabase corretamente
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Exporta como variável global para ser usado em outras páginas
window.supabaseClient = supabaseClient;
