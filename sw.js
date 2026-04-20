// sw.js (Service Worker) - 修正版
self.addEventListener('install', (event) => {
  console.log('Service Worker installed.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
});

// fetchイベントの正しい書き方
self.addEventListener('fetch', (event) => {
  // PWAの条件を満たすために最低限必要
  event.respondWith(fetch(event.request));
});

