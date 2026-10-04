/*
  Öffnungszeiten: geltende Saison markieren und die genauen Daten einsetzen (Zeit: Europe/Zurich).
  Sommerzeiten: Ostersonntag bis Olma-Beginn. Winterzeiten: Olma-Beginn bis Ostersonntag.
  Ostern wird berechnet (exakt). Der Olma-Beginn ist der zweite Donnerstag im Oktober.
  Ein Datum wird nur angezeigt, wenn es in OLMA_BESTAETIGT steht (offizielle Angabe auf olma.ch).
  Für andere Jahre steht «Oktober <Jahr>», bis das Datum dort ergänzt wird: jedes Jahr nach der
  Olma den Beginn des nächsten Jahres eintragen. Ohne Skript bleiben Markierung und Daten weg,
  der Text im Seitenkörper erklärt den Wechsel trotzdem.
  Falls Frau Züst erst nach der Olma umstellt: in olma() Tage addieren und OLMA_BESTAETIGT anpassen.
*/
(function () {
  try {
    var OLMA_BESTAETIGT = { 2025: 9, 2026: 8 };
    var MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
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
    // Geschützte Leerzeichen, damit ein Datum nicht mitten im Text umbricht
    var datum = function (d) { return d.getDate() + '. ' + MONATE[d.getMonth()] + ' ' + d.getFullYear(); };
    var olmaText = function (y) { return OLMA_BESTAETIGT[y] ? OLMA_BESTAETIGT[y] + '. Oktober ' + y : 'Oktober ' + y; };

    var sommer = heute >= num(ostern(jahr)) && heute < num(olma(jahr));
    // Jahr, in dem die gerade geltende (oder nächste) Saison beginnt
    var sommerJ = sommer ? jahr : (heute >= num(olma(jahr)) ? jahr + 1 : jahr);
    var winterJ = heute >= num(olma(jahr)) ? jahr : (sommer ? jahr : jahr - 1);

    var texte = {
      sommer: 'Von Ostern (' + datum(ostern(sommerJ)) + ') bis zur Olma (' + olmaText(sommerJ) + ')',
      winter: 'Von der Olma (' + olmaText(winterJ) + ') bis Ostern (' + datum(ostern(winterJ + 1)) + ')'
    };
    ['sommer', 'winter'].forEach(function (saison) {
      var zeile = document.querySelectorAll('[data-saison="' + saison + '"] .zeitraum');
      for (var i = 0; i < zeile.length; i++) zeile[i].textContent = texte[saison];
    });

    var aktiv = document.querySelectorAll('[data-saison="' + (sommer ? 'sommer' : 'winter') + '"]');
    for (var j = 0; j < aktiv.length; j++) {
      aktiv[j].classList.add('zeit--aktiv');
      aktiv[j].setAttribute('aria-current', 'true');
      var marke = aktiv[j].querySelector('.jetzt');
      if (marke) marke.hidden = false;
    }
  } catch (e) { /* ohne Markierung und Daten weiter */ }
})();
