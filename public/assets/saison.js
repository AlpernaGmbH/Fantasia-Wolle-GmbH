/*
  Saison automatisch markieren (Zeit: Europe/Zurich).
  Sommerzeiten: Ostersonntag bis Olma-Beginn. Winterzeiten: Olma-Beginn bis Ostersonntag.
  Olma-Beginn = zweiter Donnerstag im Oktober (2026: 8. Oktober, bestätigt auf olma.ch;
  für andere Jahre abgeleitet, jährlich gegenprüfen). Ohne Skript bleibt keine Saison markiert,
  der Text darüber erklärt den Wechsel trotzdem.
  Falls Frau Züst erst nach der Olma (18. Oktober 2026) umstellt: in olma() Tage addieren.
*/
(function () {
  try {
    var t = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()).split('-');
    var jahr = +t[0], heute = jahr * 10000 + (+t[1]) * 100 + (+t[2]);
    var num = function (d) { return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); };
    var ostern = function (y) {
      var a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4,
          f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
          i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7,
          m = Math.floor((a + 11 * h + 22 * l) / 451), n = h + l - 7 * m + 114;
      return new Date(y, Math.floor(n / 31) - 1, (n % 31) + 1);
    };
    var olma = function (y) {
      var ersterDonnerstag = 1 + (4 - new Date(y, 9, 1).getDay() + 7) % 7;
      return new Date(y, 9, ersterDonnerstag + 7);
    };
    var sommer = heute >= num(ostern(jahr)) && heute < num(olma(jahr));
    var karte = document.querySelector('[data-saison="' + (sommer ? 'sommer' : 'winter') + '"]');
    if (!karte) return;
    karte.classList.add('zeit--aktiv');
    karte.setAttribute('aria-current', 'true');
    var marke = karte.querySelector('.jetzt');
    if (marke) marke.hidden = false;
  } catch (e) { /* ohne Markierung weiter */ }
})();
