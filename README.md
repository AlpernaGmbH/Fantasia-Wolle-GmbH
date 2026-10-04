# Fantasia Wolle GmbH – One-Pager

Website für Fantasia Wolle GmbH, Hauptstrasse 11, 9042 Speicher (Wolle, Mercerie und Geschenke).
Statische Seite ohne Build-Schritt, gestaltet nach `docs/Fantasia-Corporate-Design.pdf`.

**Stand:** veröffentlicht am 4. Oktober 2026 auf Vercel (www.fantasia-wolle.ch und fantasia-wolle.vercel.app). Erstellt von Alperna GmbH.

## Aufbau

```
public/                 wird ausgeliefert (Vercel-Ausgabeverzeichnis)
  index.html            Startseite
  kontakt.html          Kontakt und Anfahrt (/kontakt), Links auf Google Maps
  impressum.html        Impressum (/impressum)
  datenschutz.html      Datenschutzerklärung (/datenschutz)
  assets/site.css       gemeinsames Stylesheet aller Seiten
  assets/saison.js      markiert die geltende Saison und setzt die genauen Daten (Ostern, Olma) bei den Öffnungszeiten ein
  assets/img/           Logo und Fotos
  assets/fonts/         Fraunces 600, Karla 400/500/700 (Latin, woff2), lokal ausgeliefert
docs/                   Corporate Design (PDF), intern, wird nicht ausgeliefert
vercel.json             Ausgabeverzeichnis, saubere URLs und Header (noindex, nosniff, Referrer-Policy)
```

Ansehen: `npx serve public` im Projektordner (die Unterseiten brauchen den Server, wegen der URLs ohne `.html`).

Layout: Umbrüche bei 480, 760 und 900 px, ausserdem Rücksicht auf Querformat und Notch-Handys (`env(safe-area-inset-*)`). Geprüft in Chromium mit 16 Bildschirmgrössen von 320 bis 2560 px (Handys hoch und quer, Tablets, Laptops, Desktop): kein Überlauf, Tippflächen mindestens 44 px. Safari und Firefox wurden nicht getestet.

## Regeln aus dem Corporate Design (kurz)

- Sprache: Sie-Form, konkret, keine Ausrufezeichen, keine Superlative. «ss» statt «ß».
- Ortsbezug immer «Fantasia, Hauptstrasse 11, Speicher».
- Saison immer «Sommerzeiten (Ostern bis zur Olma)» und «Winterzeiten (Olma bis Ostern)».
- Farben: Magenta `#DE0262`, Rosa `#FFB3D1`, Schwarz, Weiss, Tiefmagenta `#6E0031`, Rosé-Weiss `#FFF4F8`. Keine weiteren Töne, auch keine Grautöne.
- Magenta nur einmal pro Fläche. Rosa nie als Schriftfarbe. Erlaubte Texte: Schwarz auf Weiss oder Rosé-Weiss, Weiss auf Schwarz oder Tiefmagenta, Magenta auf Weiss.
- Logo mindestens 150 px breit, nie auf Rosa, nie verzerrt.
- Schriften: Fraunces für Titel, Karla für Text, keine dritte Schrift.

## Rechtliches pflegen

Die Datenschutzerklärung stimmt nur, solange die Website **keine Cookies setzt, keine Reichweitenmessung oder Analyse nutzt, keine Formulare hat und nichts von Drittanbietern einbindet** (Karten, Videos, Schriften, Social-Plugins). Google Maps ist nur verlinkt, nicht eingebettet (Abschnitt 10). Eine eingebettete Karte würde einen Cookie-Hinweis und eine Anpassung des Textes erfordern. Sobald sich daran etwas ändert, muss `public/datenschutz.html` vorher angepasst werden. Das gilt auch für einen Wechsel des Hostings oder der E-Mail-Adresse.

Quellen der Angaben im Impressum:

- UID CHE-108.623.814: Handelsregister (über help.ch und aili.ch gegengeprüft).
- Susanne Züst als Gesellschafterin und Geschäftsführerin: Handelsregister. Das Impressum folgt dem amtlichen Vornamen «Susanne». Sonst heisst sie auf der Website und beim Haus zur Blume «Susan».
- «im Haus zur Blume», Öffnungszeiten, Telefon und E-Mail: stimmen mit zur-blume.ch überein.
- Öffnungszeiten inklusive «Montag und Sonntag geschlossen»: Google-Profil «Fantasia Wolle GmbH».
- Haltestelle Bahnhof Speicher (rund 200 m, 3 Gehminuten): Fahrplandaten (transport.opendata.ch) für die Haltestellen «Speicher» (Bahnhof) und «Speicher, Bahnhof» (Bus), Fussweg nach OSM-Fussgängerrouting (197 und 215 m).
- Olma 2026 (8.–18. Oktober): olma.ch. Ostern wird berechnet.

## Offene Punkte

Von Frau Züst bestätigen lassen (nicht aus dem Corporate Design belegt):

1. Zitat im Abschnitt «Wer Sie berät» (steht in ihrem Namen)
2. «Wir rechnen Ihnen den Materialbedarf aus, bevor Sie kaufen»
3. «Nähfaden in über hundert Farben», «auch einzeln»
4. «Fertig gestrickte Stirnbänder, Socken und Kleinigkeiten», «auf Wunsch verpackt»
5. Saisonwechsel am Olma-Beginn oder nach der Olma (`public/assets/saison.js`; Olma-Beginn = zweiter Donnerstag im Oktober, 2026 am 8. Oktober). Die Seite zeigt die Daten in der Form «Von Ostern (5. April 2026) bis zur Olma (8. Oktober 2026)» und geht vom Olma-Beginn aus.

Ausserdem:

- **Jedes Jahr nach der Olma:** den Olma-Beginn des nächsten Jahres in `OLMA_BESTAETIGT` in `public/assets/saison.js` eintragen. Bis dahin steht dort nur «Oktober <Jahr>», weil ein ungeprüftes Datum nicht angezeigt wird (2027 ist noch nicht veröffentlicht).
- Porträt von Susan Züst für den Abschnitt «Wer Sie berät» (fehlt).
- Fotos: Die Dateien sind nur 620 px breit (Hero 820 px). Auf Retina-Bildschirmen (MacBook, iPhone) wirken sie dadurch etwas weich. Für scharfe Bilder Originale mit mindestens 1600 px Breite einsetzen. Das Logo ist ein PNG ohne Vektorquelle (siehe Corporate Design).
- Favicon (zwei Ballons auf schwarzem Kreis) braucht zuerst die Vektor-Nachzeichnung des Logos.
- `noindex` entfernen, wenn die Seite in Suchmaschinen erscheinen soll: `<meta name="robots">` in `index.html`, `kontakt.html`, `impressum.html` und `datenschutz.html` sowie der Header `X-Robots-Tag` in `vercel.json`. Dabei auch `<link rel="canonical">` auf `https://www.fantasia-wolle.ch/` setzen, damit `fantasia-wolle.vercel.app` nicht als Dublette zählt.

## Deployment

Vercel-Projekt `fantasia-wolle` (Konto von `alperna-tool`), verbunden mit diesem Repository. Jeder Push auf `main` löst ein neues Deployment aus. Kein Build-Befehl, ausgeliefert wird nur `public/` (siehe `vercel.json`). `docs/` und `README.md` bleiben intern.
