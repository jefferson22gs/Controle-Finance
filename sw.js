const CACHE_NAME = 'painel-financeiro-v1';
// Lista de arquivos que compõem a "casca" do aplicativo
const URLS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  '/',
  'controle_car.html',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

// Arquivo: sw.js

const CACHE_NAME = 'painel-financeiro-v2'; // Mude a versão para forçar a atualização
const URLS_TO_CACHE = [
  '/',
  'index.html', // Adicione explicitamente
  'controle_car.html',
  'cadastro.html', // Adicione a página de cadastro
  'recuperar-senha.html', // Adicione a página de recuperação
  'supabaseClient.js', // Adicione o cliente supabase
  'icon-192.png', // Adicione os ícones
  'icon-512.png', // Adicione os ícones
  'manifest.webmanifest', // Adicione o manifesto
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

// O restante do seu arquivo sw.js pode continuar igual...

// Evento de Instalação: Salva os arquivos essenciais no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Evento de Fetch: Intercepta as requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    // Tenta encontrar a resposta no cache primeiro
    caches.match(event.request)
      .then(response => {
        // Se encontrar no cache, retorna a resposta do cache
        if (response) {
          return response;
        }
        // Se não, faz a requisição à rede
        return fetch(event.request);
      })
  );
});

