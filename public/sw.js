(()=>{const a="static-cache-v0",t="dynamic-cache-v0",e=["/","/alcohol","/contacts","/cost","/drink","/drug","/fizeo","/game","/main.css","s.js","/images/no-image.jpg"];self.addEventListener("install",(async()=>{const t=await caches.open(a);await t.addAll(e)})),self.addEventListener("activate",(async()=>{const e=(await caches.keys()).map((async e=>{[a,t].includes(e)||await caches.delete(e)}));await Promise.all(e)})),self.addEventListener("fetch",(a=>{"GET"===a.request.method&&a.respondWith(async function(a){return await caches.match(a)||await async function(a){const e=await caches.open(t);try{const t=await fetch(a);return await e.put(a,t.clone()),t}catch(t){return await e.match(a)||(-1!==a.url.indexOf(".html")?caches.match("./offline.html"):caches.match("./images/no-image.jpg"))}}(a)}(a.request))}))})();