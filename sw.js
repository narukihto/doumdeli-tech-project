// ==========================================
// 1. CONFIGURATION DU NOYAU DE CACHE TECHNOLOGIQUE
// ==========================================
// تم تحديث اسم الكاش والإصدار لضمان تنظيف ملفات الطب القديمة وتفعيل النظام التقني فوراً
const CACHE_NAME = 'doumdeli-tech-v1';

// الأصول الثابتة التي تضمن عمل موقع التكنولوجيا بالكامل دون إنترنت
const STATIC_ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './style.css', // تم إضافته لضمان حفظ التصميم والجماليات التقنية أوفلاين

  // --- IMAGES TECHNOLOGIQUES & ATELIER (Trajectoires locales) ---
  './images/frp-bypass.jpg',
  './images/smartphone-repair.jpg',
  './images/pc-engineering.jpg',
  './images/micro-soldering.jpg',
  './images/data-recovery.jpg',
  './images/network-security.jpg'
];

// ==========================================
// 2. ÉVÉNEMENT 'INSTALL' : MISE EN CACHE DES RESSOURCES TECH
// ==========================================
self.addEventListener('install', (e) => {
  console.log('💻 [Service Worker] Installation du noyau technologique et mise en cache...');
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // نضمن بقاء تثبيت التطبيق مرناً حتى لو لم تكن مجلدات الصور المحلية ممتلئة بعد
      return cache.addAll(STATIC_ASSETS)
        .then(() => console.log('✅ [Service Worker] Tous les actifs technologiques sont sécurisés !'))
        .catch(err => console.log('⚠️ [Service Worker] Note: Certaines ressources locales seront indexées au premier chargement.', err));
    })
  );
  self.skipWaiting();
});

// ==========================================
// 3. ÉVÉNEMENT 'ACTIVATE' : PURGE DE L'ANCIEN CACHE MÉDICAL
// ==========================================
self.addEventListener('activate', (e) => {
  console.log('⚡ [Service Worker] Activation et purge des anciens caches obsolètes...');
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // مسح الكاش الطبي القديم تلقائياً ومطابقة الكاش التكنولوجي الجديد
          if (key !== CACHE_NAME) {
            console.log(`🗑️ [Service Worker] Suppression de l'ancien cache : ${key}`);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// ==========================================
// 4. ÉVÉNEMENT 'FETCH' : STRATÉGIE DE REPLI HORS-LIGNE (OFFLINE SYSTEM)
// ==========================================
self.addEventListener('fetch', (e) => {
  if (!e.request.url.startsWith('http')) return;

  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // تخزين ديناميكي للصور الملتقطة من الـ API العام لضمان بقائها سريعة
        if (response.status === 200) {
          const isTechRequest = e.request.url.includes('images') || e.request.destination === 'image';
          const isUnsplashApi = e.request.url.includes('unsplash.com');

          if (isTechRequest || isUnsplashApi) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseClone);
              console.log(`📥 [Service Worker] Image technique mise à jour : ${e.request.url}`);
            });
          }
        }
        return response;
      })
      .catch((error) => {
        // تشغيل وضع الـ Offline التلقائي للمحافظة على تصفح العميل لتذاكر الدعم والخدمات
        console.log(`📡 [Service Worker] Mode Offline Tech activé pour : ${e.request.url}`);
        return caches.match(e.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // صورة تقنية عالية الجودة تظهر كبديل تلقائي رائع في حال فقدان الصور أو الشبكة
          if (e.request.destination === 'image') {
            return caches.match('https://images.unsplash.com/photo-1597733336794-12d05021d510?w=600')
              .then(fallbackResponse => fallbackResponse || new Response('', { status: 404, statusText: 'Not Found' }));
          }
        });
      })
  );
});
