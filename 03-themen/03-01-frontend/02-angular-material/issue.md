---
layout: default
title: Angular Material einbinden
---

# Angular Material einbinden und Theme konfigurieren

Damit unsere Rezepte-App ein professionelles Erscheinungsbild bekommt, binden wir die Komponentenbibliothek Angular Material ein. Wir konfigurieren ein eigenes Farbschema und richten die benötigten Schriften und Icons ein.

## 🎯 Lernziele

* Du kannst Angular Material mit `ng add` in ein bestehendes Projekt integrieren.
* Du verstehst das Theming-Konzept von Angular Material.
* Du weißt, wie externe Schriften (Roboto) und Icon-Fonts (Material Icons) eingebunden werden.
* Du kannst die Typografie-Klasse `mat-typography` global anwenden.

## ✅ Definition of Done

* [ ] Im Projekt ist Angular Material konfiguriert.
* [ ] Ein Prebuilt-Theme (z.B. rose-red) ist als Basis konfiguriert.
* [ ] Die Schriftart Roboto und Material Icons sind eingebunden.
* [ ] Die Klasse `mat-typography` wird global auf den `<body>` angewendet.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Führe `ng add @angular/material` aus.
2. Stelle sicher, dass Roboto, Material Icons und die Typografie-Klasse korrekt eingebunden sind.
3. Passe Markup und Styling nach der Vorlage an.

## 🔒 Optional: Fonts lokal einbinden (Self-Hosting)

Standardmäßig werden Roboto und Material Icons per `<link>`-Tag von Google Fonts geladen. Dabei werden bei jedem Seitenaufruf Daten an Google übertragen — das ist aus Datenschutzsicht (DSGVO) problematisch und kann in
Unternehmensumgebungen unerwünscht sein.

Eine bessere Alternative ist das **Self-Hosting** über [Fontsource](https://fontsource.org/). Dabei werden die Fonts
als NPM-Pakete installiert und direkt aus der Anwendung ausgeliefert:

1. Installiere die Pakete:
   ```bash
   npm install @fontsource/roboto @fontsource/material-icons
   ```

2. Importiere die Fonts in `styles.scss` (Infos siehe [offizielle Dokumentation](https://developers.google.com/fonts/docs/material_icons?hl=de#setup_method_2_self_hosting)):
   ```scss
   @import '@fontsource/roboto/400.css';
   @import '@fontsource/roboto/500.css';
   @import '@fontsource/material-icons';

   .material-icons {
     font-family: 'Material Icons';
     font-weight: normal;
     font-style: normal;
     font-size: 24px;  /* Bevorzugte Icon-Größe */
     display: inline-block;
     line-height: 1;
     text-transform: none;
     letter-spacing: normal;
     word-wrap: normal;
     white-space: nowrap;
     direction: ltr;

     /* Unterstützung für alle WebKit-Browser. */
     -webkit-font-smoothing: antialiased;
     /* Unterstützung für Safari und Chrome. */
     text-rendering: optimizeLegibility;

     /* Unterstützung für Firefox. */
     -moz-osx-font-smoothing: grayscale;

     /* Unterstützung für IE. */
     font-feature-settings: 'liga';
   }
   ```

3. Entferne die `<link>`-Tags für Roboto und Material Icons aus `index.html`.

Damit werden keine externen Requests an Google-Server mehr gesendet.

## 📚 Selbstlernmaterial

* [Angular Material — Getting Started](https://material.angular.io/guide/getting-started) — Offizielle Anleitung
* [Angular Material: Component Catalog](https://material.angular.io/components/categories) — Komponentenübersicht
* [Material Design](https://m3.material.io/) — Material Design Richtlinien
* [Fontsource](https://fontsource.org/) — Self-Hosting von Open-Source-Fonts als NPM-Pakete
* [Why and how to self host Google Fonts & Icons in your Angular app](https://medium.com/medialesson/why-and-how-to-self-host-google-fonts-icons-in-your-angular-app-5f9fef0349ef) — Hintergrund und Anleitung zum Self-Hosting

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen `ng add` und `npm install`? Welche zusätzlichen Schritte führt `ng add` aus?
* Was passiert, wenn Du die `mat-typography`-Klasse nicht setzt? Welche Auswirkungen hat das auf die Darstellung der Material-Komponenten?
