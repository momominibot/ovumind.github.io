/* Rhythme moved from /ovumind.github.io/ to /rhythme/ on 20 Oct 2026. Every old address lands on the same page at the
 * new one, keeping the query and the #hash (sign-in links carry their tokens there). Same site host, so nothing saved
 * on the phone is lost: the browser keeps it by host, not by path. */
(function () {
  var OLD = '/ovumind.github.io', NEW = '/rhythme';
  var p = location.pathname;
  var rest = p.indexOf(OLD) === 0 ? p.slice(OLD.length) : p;
  if (!rest || rest === '/') rest = '/';
  location.replace(NEW + rest + location.search + location.hash);
})();
