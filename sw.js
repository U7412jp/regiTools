// sw.js (Service Worker)

// インストール時に実行されるイベント
self.addEventListener('install', (event) => {
  console.log('Service Worker installed.');
  // インストール後、すぐにアクティブにする
  self.skipWaiting();
});

// アクティブになった時に実行されるイベント
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
});

// ネットワークリクエストが発生した時に実行されるイベント
// これを書かないとPWAとして認識されない場合があります
self.fetch = (event) => {
  event.respondWith(fetch(event.request));
};
