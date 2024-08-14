'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ed519d0f02f501bf056078d68f67c6dc",
"index.html": "436a02ccff89233adc566d3417eec8e7",
"/": "436a02ccff89233adc566d3417eec8e7",
"main.dart.js": "43e913c10f3565421d660ecd5c82de96",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6823aa10a40c9c8d467411c583ff97dd",
"assets/AssetManifest.json": "ccc19201e18805e65695e5272f56faaa",
"assets/NOTICES": "24175aaf20f098b0281d18f19488f685",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/assets/image/store-large2.jpg": "aa9359ea496283eb02db43aed345d284",
"assets/lib/assets/image/totebag.png": "7095b9318cc6d2a5ab620607644e386d",
"assets/lib/assets/image/food-box.png": "cc59b5f0ab908fbd343b2024c8e8e14d",
"assets/lib/assets/image/store-large1.jpg": "d3c7f502adc456a08f82723df0ac7fe7",
"assets/lib/assets/image/background2.png": "07e0465fa9c802fd21ece6419f908b64",
"assets/lib/assets/image/store2.jpg": "7d247c6e95a9c1d0c35e3c79d7187a49",
"assets/lib/assets/image/logo4-old.jpg": "953a133b6af731ab983c676b17175e87",
"assets/lib/assets/image/logo4-old.png": "c756ac226fae45e9ef29579fdedb25db",
"assets/lib/assets/image/store3.jpg": "79f15c879196c759bc2fae2e0d817ad0",
"assets/lib/assets/image/background1.png": "6bc972d35e64870ddd3078bbe3ba2d1c",
"assets/lib/assets/image/store1.jpg": "0b136e9ffea22300e56fa81cc1440bb6",
"assets/lib/assets/image/croissant2.jpg": "72ce14f7bbd442e1b0c1ab3fcf362b1c",
"assets/lib/assets/image/favicon.jpg": "c48c641641572472254c80553b36b12e",
"assets/lib/assets/image/logo1.png": "3a8ef073811637c1cbc35ff413398169",
"assets/lib/assets/image/logo3.png": "cc17028c559b226ab792584d95b96251",
"assets/lib/assets/image/croissant1.jpg": "04aa8bd3946bf8d7023026470dfdaab0",
"assets/lib/assets/image/empty-cart.png": "ebb13225d922f10cdca8e6bd83fab36d",
"assets/lib/assets/image/logo2.png": "b20cb6c882706f00135303763c3e245c",
"assets/lib/assets/image/fruits-landscape1.jpg": "255c27c704427c2ffd71ea62e69c12d2",
"assets/lib/assets/image/croissant-landscape1.jpg": "b69d9ae820a59533d2bd4442b0fa1c16",
"assets/lib/assets/image/logo4.png": "8bac34dc028f9d1586635b891e545ad5",
"assets/lib/assets/image/empty-list.png": "d0c39fba0d9bc7a6800795cd163dc486",
"assets/lib/assets/image/pastries-landscape1.jpg": "ac0bac6ec855001e6de106af069cd252",
"assets/lib/assets/image/google.png": "0dd54f853a1bffb0e9979f8146268af3",
"assets/lib/assets/image/gojek.png": "58e4858e3c69f5b02ba5b571cb185ec2",
"assets/lib/assets/audio/order.mp3": "402093dcfc89a4c5a87c3a5c26a1c931",
"assets/lib/assets/json/loading.json": "4711ebe7f643f6f1042b1e8b6ed3be3d",
"assets/lib/assets/json/success.json": "14a616d7193c55d692b68babae271929",
"assets/lib/assets/json/slider.json": "19fb8871de3959056e0ad89b6db150a6",
"assets/lib/assets/json/order-success.json": "36a3aa6c3ddeb8cc79e664a9c46a2512",
"assets/AssetManifest.bin": "e1893ba6c44c459a5af0dd83c86bef99",
"assets/fonts/MaterialIcons-Regular.otf": "8f8065abdb78859c9e6f70d4ee6dfa18",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
