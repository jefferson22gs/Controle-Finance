//
// COPIE E COLE ESTE BLOCO INTEIRO NO SEU ARQUIVO sw.js
//
const CACHE_NAME = 'painel-financeiro-v2';
const URLS_TO_CACHE = [
  '/',
  'index.html',
  'controle_car.html',
  'cadastro.html',
  'recuperar-senha.html',
  'supabaseClient.js',
  'icon-192.png',
  'icon-512.png',
  'manifest.webmanifest',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

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
