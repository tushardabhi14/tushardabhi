'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "73dadb3bb6ff997d82f52b9d924f94be",
"flutter_bootstrap.js": "c6f46da4e0f0657dcae1fc7db6efd520",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"version.json": "1f7fdfb9ac44851bed849c022f09be11",
"razorpay_web.js": "f60f418f542f58415f0e8a8ce96ef816",
"icons/Icon-maskable-192.png": "58ac585c72a33059986ef150960150d2",
"icons/Icon-maskable-512.png": "58ac585c72a33059986ef150960150d2",
"icons/Icon-192.png": "58ac585c72a33059986ef150960150d2",
"icons/Icon-512.png": "58ac585c72a33059986ef150960150d2",
"index.html": "9a6f38c05ddd0bbbd8a26932242ca5a3",
"/": "9a6f38c05ddd0bbbd8a26932242ca5a3",
"main.dart.js": "579589dc2a0f5be96c954267a99b9398",
"favicon.png": "58ac585c72a33059986ef150960150d2",
"firebase-messaging-sw.js": "8a74b342e01afabda09067ae8cd9c1d8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "64cf274886968322cd13d0099ba13483",
"assets/NOTICES": "bce2015970d89652236193d5f751b6ee",
"assets/FontManifest.json": "0db8b97a788550172c9b964da9d558cf",
"assets/AssetManifest.bin.json": "080f6f84e24dce4d1151dbafc59076ef",
"assets/AssetManifest.json": "0bef2b6265d18eb2b2af1aa7e9369726",
"assets/fonts/MaterialIcons-Regular.otf": "b4ad2f5a589c0023ff0b7175dc0575a0",
"assets/assets/image/header_logo.svg": "ef9efef13e798cf79df860b036ae3b36",
"assets/assets/image/welcome_bg.png": "728e52db6f63df10bfe891449616322d",
"assets/assets/image/app_icon.png": "58ac585c72a33059986ef150960150d2",
"assets/assets/image/banner.jpg": "b41765031b9d6e108d656bc182371e15",
"assets/assets/image/splash_logo.svg": "bd753cc0eb4022860c86c816df47a6dd",
"assets/assets/image/planbg.png": "57915f87700e2cbaced398056326d1d2",
"assets/assets/image/maintenance.png": "69d29c187aa129808ddd90cceb272148",
"assets/assets/image/splash_bg.png": "a6af446077310a76d849e871a7de0468",
"assets/assets/image/card_bg.png": "8714074cc78042f5fc10b8c0f5986fd2",
"assets/assets/image/no_internet.png": "01ec508a749ace162c315cf90e92d778",
"assets/assets/image/header_bg.png": "194d9ab456996633b5c788b16fa6e84b",
"assets/assets/image/welcome_logo.svg": "56984ffc650ba1c72139a804840b2371",
"assets/assets/image/header2_bg.png": "84fe8e493893fd4c0a817cecbf3a8fc4",
"assets/assets/icons/money.svg": "5d742974d18c70c06212fe710f514d75",
"assets/assets/icons/delete.svg": "dfe228e451bf104b31d6d9174a6ae384",
"assets/assets/icons/view.svg": "4942d7c0ffdc467b525a2f0529ab62a5",
"assets/assets/icons/youtube.svg": "0637af2ce23b4746207d0f8bdb4e9abb",
"assets/assets/icons/download.svg": "281368cae51f4d30cc48e2ea969cee15",
"assets/assets/icons/addproduct.svg": "c6996d585b21e3a18301409e6ec719dc",
"assets/assets/icons/labor_costs.svg": "b09c295ec7ba3d7eeedca9e5937d88e0",
"assets/assets/icons/invoice.svg": "47e664c820a2ca1e4a0b771cb524cdd4",
"assets/assets/icons/whatsapp.svg": "b446a5514b6f3f83c6dddcec87da10ad",
"assets/assets/icons/notification.svg": "383fe6e7a0cd0ab01c01b1120e3875a5",
"assets/assets/icons/logo_bg.svg": "0c20b54d1af0be1ac4e26a409f02a31d",
"assets/assets/icons/share.svg": "3f9bd25023ba35946ea58297c13476e1",
"assets/assets/icons/hardware.svg": "ad8c90c00ab04ee650a7223469ad847f",
"assets/assets/icons/refferal.svg": "323d5e8de605a671754b3c72ec7c6902",
"assets/assets/icons/call.svg": "b228cd7b38c3fbed86f380782b79b056",
"assets/assets/icons/ads.svg": "efa94da593a1fcb25f55fddfc1bb1578",
"assets/assets/icons/arrow.svg": "c250dd19105c86d396ac88116817066b",
"assets/assets/icons/preview.svg": "e8a567bb6560c159888992120c0d6314",
"assets/assets/icons/facebook.svg": "9907827bbbc6737ff1cad9e399f40807",
"assets/assets/icons/price_setting.svg": "5d65ff9aae8ecea201ad650be50d960a",
"assets/assets/icons/furniture.svg": "643041496e4f371c82a63d909c4647fc",
"assets/assets/icons/instagram.svg": "25908ba3680e6c60e8769aa41797b6ae",
"assets/assets/icons/edit.svg": "b6fa5d51b3eb2ed05019e36a14fb6ef3",
"assets/assets/icons/web.svg": "7e5c6ff022847b202a27be760f6222fa",
"assets/assets/icons/bell_icon.svg": "3dd12835eab0b3dc7eead416e8e7fd5d",
"assets/assets/icons/addparty.svg": "7ff5cb2091f9b6cd85c745e193e103d3",
"assets/assets/icons/profile.svg": "e5ce278e020089fcb8129a38d4ce835f",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/NotoSansGujarati-Regular.ttf": "0e88235b12a3affe7c50341210aab966",
"assets/assets/fonts/NotoSansGujarati-Bold.ttf": "64f3dda39221ae12d31adfb0a528a5a3",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "bf4c224b1f4f4893a2c3b6850e289abf",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "440da663f17184f21f007a3a2bf60f69",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
