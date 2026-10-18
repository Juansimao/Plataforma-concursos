/* Protocolo · service worker só para as notificações (lembrete de revisões).
   Não guarda páginas nem arquivos em cache: o app continua sempre atualizado como antes. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data ? e.data.text() : '' }; }
  const url = typeof d.url === 'string' && d.url.startsWith('/') ? d.url : '/#revisoes';
  e.waitUntil(self.registration.showNotification(d.title || 'Hora de revisar', {
    body: d.body || 'Você tem revisões esperando no app.',
    icon: '/icon-192.png',
    badge: '/badge-96.png',
    tag: d.tag || 'revisoes',
    renotify: false,
    lang: 'pt-BR',
    data: { url },
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const alvo = new URL((e.notification.data && e.notification.data.url) || '/#revisoes', self.location.origin);
  e.waitUntil((async () => {
    const abertas = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    // app já aberto no mesmo curso: só leva para Revisões; senão abre (o ?curso=oj escolhe o Oficial de Justiça)
    const mesmo = abertas.find(c => { try { const u = new URL(c.url); return u.origin === alvo.origin && u.search === alvo.search; } catch (x) { return false; } });
    if (mesmo) { await mesmo.focus(); mesmo.postMessage({ irPara: alvo.hash }); return; }
    await self.clients.openWindow(alvo.href);
  })());
});
