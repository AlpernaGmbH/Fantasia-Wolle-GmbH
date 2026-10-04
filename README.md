# Fantasia Wolle GmbH – One-Pager

Website für Fantasia Wolle GmbH, Hauptstrasse 11, 9042 Speicher (Wolle, Mercerie und Geschenke).
Statische Seite ohne Build-Schritt, gestaltet nach `docs/Fantasia-Corporate-Design.pdf`.

**Stand:** veröffentlicht am 4. Oktober 2026 auf Vercel, noch ohne eigene Domain. Erstellt von Alperna GmbH.

## Aufbau

```
public/                 wird ausgeliefert (Vercel-Ausgabeverzeichnis)
  index.html            Startseite mit dem kleinen Skript für die Saison-Markierung
  impressum.html        Impressum (/impressum)
  datenschutz.html      Datenschutzerklärung (/datenschutz)
  assets/site.css       gemeinsames Stylesheet aller Seiten
  assets/img/           Logo und Fotos
  assets/fonts/         Fraunces 600, Karla 400/500/700 (Latin, woff2), lokal ausgeliefert
docs/                   Corporate Design (PDF), intern, wird nicht ausgeliefert
vercel.json             Ausgabeverzeichnis, saubere URLs und Header (noindex, nosniff, Referrer-Policy)
```

Ansehen: `npx serve public` im Projektordner (die Unterseiten brauchen den Server, wegen der URLs ohne `.html`).

## Regeln aus dem Corporate Design (kurz)

- Sprache: Sie-Form, konkret, keine Ausrufezeichen, keine Superlative. «ss» statt «ß».
- Ortsbezug immer «Fantasia, Hauptstrasse 11, Speicher».
- Saison immer «Sommerzeiten (Ostern bis zur Olma)» und «Winterzeiten (Olma bis Ostern)».
- Farben: Magenta `#DE0262`, Rosa `#FFB3D1`, Schwarz, Weiss, Tiefmagenta `#6E0031`, Rosé-Weiss `#FFF4F8`. Keine weiteren Töne, auch keine Grautöne.
- Magenta nur einmal pro Fläche. Rosa nie als Schriftfarbe. Erlaubte Texte: Schwarz auf Weiss oder Rosé-Weiss, Weiss auf Schwarz oder Tiefmagenta, Magenta auf Weiss.
- Logo mindestens 150 px breit, nie auf Rosa, nie verzerrt.
- Schriften: Fraunces für Titel, Karla für Text, keine dritte Schrift.

## Rechtliches pflegen

Die Datenschutzerklärung stimmt nur, solange die Website **keine Cookies setzt, keine Reichweitenmessung oder Analyse nutzt, keine Formulare hat und nichts von Drittanbietern einbindet** (Karten, Videos, Schriften, Social-Plugins). Sobald sich daran etwas ändert, muss `public/datenschutz.html` vorher angepasst werden. Das gilt auch für einen Wechsel des Hostings oder der E-Mail-Adresse.

Quellen der Angaben im Impressum:

- UID CHE-108.623.814: Handelsregister (über help.ch und aili.ch gegengeprüft).
- Susanne Züst als Gesellschafterin und Geschäftsführerin: Handelsregister. Das Impressum folgt dem amtlichen Vornamen «Susanne». Sonst heisst sie auf der Website und beim Haus zur Blume «Susan».
- «im Haus zur Blume», Öffnungszeiten, Telefon und E-Mail: stimmen mit zur-blume.ch überein.

## Offene Punkte

Von Frau Züst bestätigen lassen (nicht aus dem Corporate Design belegt):

1. Zitat im Abschnitt «Wer Sie berät» (steht in ihrem Namen)
2. «Wir rechnen Ihnen den Materialbedarf aus, bevor Sie kaufen»
3. «Nähfaden in über hundert Farben», «auch einzeln»
4. «Fertig gestrickte Stirnbänder, Socken und Kleinigkeiten», «auf Wunsch verpackt»
5. Saisonwechsel am Olma-Beginn oder nach der Olma (Skript am Ende von `public/index.html`; Olma-Beginn = zweiter Donnerstag im Oktober, 2026 am 8. Oktober)

Ausserdem:

- Porträt von Susan Züst für den Abschnitt «Wer Sie berät» (fehlt).
- Favicon (zwei Ballons auf schwarzem Kreis) braucht zuerst die Vektor-Nachzeichnung des Logos.
- `noindex` entfernen, sobald die endgültige Domain steht: `<meta name="robots">` in `index.html`, `impressum.html` und `datenschutz.html` sowie der Header `X-Robots-Tag` in `vercel.json`.

## Deployment

Vercel-Projekt `fantasia-wolle` (Konto von `alperna-tool`), verbunden mit diesem Repository. Jeder Push auf `main` löst ein neues Deployment aus. Kein Build-Befehl, ausgeliefert wird nur `public/` (siehe `vercel.json`). `docs/` und `README.md` bleiben intern.
