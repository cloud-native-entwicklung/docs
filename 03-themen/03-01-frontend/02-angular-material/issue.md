---
layout: default
title: Angular Material einbinden
---

# Angular Material einbinden und Theme konfigurieren

Damit unsere Rezepte-App ein professionelles Erscheinungsbild bekommt, binden wir die Komponentenbibliothek Angular Material ein. Wir konfigurieren ein eigenes Farbschema und richten die benötigten Schriften und Icons ein.

## 🎯 Lernziele

* Du kannst Angular Material mit `ng add` in ein bestehendes Projekt integrieren.
* Du verstehst das Theming-Konzept von Angular Material und kannst ein eigenes Theme mit `mat.define-theme()` definieren.
* Du weißt, wie externe Schriften (Roboto) und Icon-Fonts (Material Icons) eingebunden werden.
* Du kannst die Typografie-Klasse `mat-typography` global anwenden.

## ✅ Definition of Done

* [ ] Die Pakete `@angular/material` und `@angular/cdk` sind als Abhängigkeiten installiert.
* [ ] Ein Prebuilt-Theme (z.B. rose-red) ist als Basis konfiguriert.
* [ ] Ein Custom Theme ist mit `mat.define-theme()` definiert und in den globalen Styles eingebunden.
* [ ] Die Schriftart Roboto und Material Icons sind eingebunden.
* [ ] Die Klasse `mat-typography` wird global auf den `<body>` angewendet.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Führe `ng add @angular/material` aus und wähle die passenden Optionen.
2. Definiere ein eigenes Theme mit `mat.define-theme()` in den globalen Styles.
3. Stelle sicher, dass Roboto, Material Icons und die Typografie-Klasse korrekt eingebunden sind.

## 🔒 Optional: Fonts lokal einbinden (Self-Hosting)

Standardmäßig werden Roboto und Material Icons per `<link>`-Tag von Google Fonts geladen. Dabei werden bei jedem
Seitenaufruf Daten an Google übertragen — das ist aus Datenschutzsicht (DSGVO) problematisch und kann in
Unternehmensumgebungen unerwünscht sein.

Eine bessere Alternative ist das **Self-Hosting** über [Fontsource](https://fontsource.org/). Dabei werden die Fonts
als NPM-Pakete installiert und direkt aus der Anwendung ausgeliefert:

1. Installiere die Pakete:
   ```bash
   npm install @fontsource/roboto @fontsource/material-icons
   ```

2. Importiere die Fonts in `styles.scss`:
   ```scss
   @import '@fontsource/roboto/400.css';
   @import '@fontsource/roboto/500.css';
   @import '@fontsource/material-icons';
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
* Warum definieren wir ein eigenes Theme statt nur ein Prebuilt-Theme zu verwenden? In welchen Projektsituationen lohnt sich der Mehraufwand?
* Was passiert, wenn Du die `mat-typography`-Klasse nicht setzt? Welche Auswirkungen hat das auf die Darstellung der Material-Komponenten?
* Wie unterscheidet sich das neue Theme-System mit `mat.define-theme()` vom älteren Ansatz mit `mat.define-light-theme()`?
