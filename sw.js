/* The old address's worker: an installed Rhythme from before the move takes this update, steps aside, and opens the
 * same page at the new address. It removes only itself: saved entries live in the browser by host and stay where they are. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(self.registration.unregister().then(function () { return self.clients.matchAll({ type: 'window' }); }).then(function (cs) {
    cs.forEach(function (c) { try { var u = new URL(c.url); var rest = u.pathname.replace(/^\/ovumind\.github\.io/, '') || '/'; c.navigate('/rhythme' + rest + u.search + u.hash); } catch (err) { } });
  }));
});
