---
layout: default
title: Angular Material einbinden
parent: Frontend
grand_parent: Übungen
nav_order: 2
has_toc: false
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
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Führe `ng add @angular/material` aus und wähle die passenden Optionen.
2. Definiere ein eigenes Theme mit `mat.define-theme()` in den globalen Styles.
3. Stelle sicher, dass Roboto, Material Icons und die Typografie-Klasse korrekt eingebunden sind.

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen `ng add` und `npm install`? Welche zusätzlichen Schritte führt `ng add` aus?
* Warum definieren wir ein eigenes Theme statt nur ein Prebuilt-Theme zu verwenden? In welchen Projektsituationen lohnt sich der Mehraufwand?
* Was passiert, wenn Du die `mat-typography`-Klasse nicht setzt? Welche Auswirkungen hat das auf die Darstellung der Material-Komponenten?
* Wie unterscheidet sich das neue Theme-System mit `mat.define-theme()` vom älteren Ansatz mit `mat.define-light-theme()`?
