# Fantasia Wolle GmbH – One-Pager

Website für Fantasia Wolle GmbH, Hauptstrasse 11, 9042 Speicher (Wolle, Mercerie und Geschenke).
Statische Seite ohne Build-Schritt, gestaltet nach `docs/Fantasia-Corporate-Design.pdf`.

**Stand:** Entwurf, nicht mit der Inhaberin (Susan Züst) abgestimmt. Erstellt von Alperna GmbH.

## Aufbau

```
index.html            Seite mit CSS und dem kleinen Skript für die Saison-Markierung
assets/img/           Logo und Fotos
assets/fonts/         Fraunces 600, Karla 400/500/700 (Latin, woff2), lokal ausgeliefert
docs/                 Corporate Design (PDF)
vercel.json           Header (noindex, nosniff, Referrer-Policy)
```

Ansehen: `index.html` im Browser öffnen oder `npx serve .` im Projektordner.

## Regeln aus dem Corporate Design (kurz)

- Sprache: Sie-Form, konkret, keine Ausrufezeichen, keine Superlative. «ss» statt «ß».
- Ortsbezug immer «Fantasia, Hauptstrasse 11, Speicher».
- Saison immer «Sommerzeiten (Ostern bis zur Olma)» und «Winterzeiten (Olma bis Ostern)».
- Farben: Magenta `#DE0262`, Rosa `#FFB3D1`, Schwarz, Weiss, Tiefmagenta `#6E0031`, Rosé-Weiss `#FFF4F8`. Keine weiteren Töne, auch keine Grautöne.
- Magenta nur einmal pro Fläche. Rosa nie als Schriftfarbe. Erlaubte Texte: Schwarz auf Weiss oder Rosé-Weiss, Weiss auf Schwarz oder Tiefmagenta, Magenta auf Weiss.
- Logo mindestens 150 px breit, nie auf Rosa, nie verzerrt.
- Schriften: Fraunces für Titel, Karla für Text, keine dritte Schrift.

## Vor dem Livegang

Von Frau Züst bestätigen lassen (nicht aus dem Corporate Design belegt):

1. Zitat im Abschnitt «Wer Sie berät» (steht in ihrem Namen)
2. «Wir rechnen Ihnen den Materialbedarf aus, bevor Sie kaufen»
3. «Nähfaden in über hundert Farben», «auch einzeln»
4. «Fertig gestrickte Stirnbänder, Socken und Kleinigkeiten», «auf Wunsch verpackt»
5. Öffnungszeiten: Montag und Sonntag fehlen (geschlossen?)
6. Saisonwechsel am Olma-Beginn oder nach der Olma (Skript am Ende von `index.html`; Olma-Beginn = zweiter Donnerstag im Oktober, 2026 am 8. Oktober)
7. Zeile «im Haus zur Blume» in der Adresse

Ausserdem:

- Porträt von Susan Züst für den Abschnitt «Wer Sie berät» (fehlt).
- Favicon (zwei Ballons auf schwarzem Kreis) braucht zuerst die Vektor-Nachzeichnung des Logos.
- `noindex` entfernen: `<meta name="robots">` in `index.html` und der Header `X-Robots-Tag` in `vercel.json`.
- Zeile «Entwurf, nicht abgestimmt · Alperna GmbH» in der Fusszeile ersetzen.

## Deployment

Vercel-Projekt `fantasia-wolle` (Team von `alperna-tool`), verbunden mit diesem Repository. Jeder Push auf `main` löst ein neues Deployment aus. Kein Build-Befehl, Ausgabeverzeichnis ist das Projektstammverzeichnis.
