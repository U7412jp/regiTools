// sw.js (Service Worker) - 修正版
self.addEventListener('install', (event) => {
  console.log('Service Worker installed.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
});

// fetchイベントの正しい書き方 (PWAとして認識されるための必須リスナー)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

