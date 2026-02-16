---
layout: default
title: Vitest einrichten (Alternative)
---

# Alternative: Test-Infrastruktur auf Vitest migrieren

Als Alternative zu Jest kann Vitest verwendet werden, das nativ auf dem Vite-Build-System aufbaut und seit Angular 19 offiziell mit `@angular/build:unit-test` unterstützt wird. Diese Übung ist eine Alternative zu den Übungen 12 und 13.

## 🎯 Lernziele

* Du verstehst die Unterschiede zwischen Jest und Vitest und die jeweiligen Vor- und Nachteile.
* Du kannst die Test-Infrastruktur eines Angular-Projekts auf Vitest migrieren und den `@angular/build:unit-test` Builder verwenden.
* Du kennst die API-Unterschiede zwischen Jest und Vitest (z.B. `vi.fn()` statt `jest.fn()`).
* Du verstehst, wie Vitest mit dem Vite-Ökosystem zusammenspielt.

## ✅ Definition of Done

* [ ] Karma/Jasmine (oder Jest) sind als Abhängigkeiten entfernt.
* [ ] `vitest` und `jsdom` sind installiert.
* [ ] Der Test-Builder in `angular.json` ist auf `@angular/build:unit-test` umgestellt.
* [ ] Alle Test-Dateien verwenden Vitest-Imports (`vi.fn()`, `describe`, `it`, `expect` aus `vitest`).
* [ ] Die Tests verwenden `TestBed` direkt (ohne Spectator).
* [ ] Alle Tests laufen erfolgreich mit `ng test`.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Entferne die bisherigen Test-Abhängigkeiten und installiere Vitest mit jsdom.
2. Stelle den Test-Builder in `angular.json` auf `@angular/build:unit-test` um und passe die TypeScript-Konfiguration an.
3. Schreibe die Test-Dateien um: Ersetze Jest/Jasmine-spezifische API-Aufrufe durch Vitest-Äquivalente.

## 📚 Selbstlernmaterial

* [Vitest Dokumentation](https://vitest.dev/guide/) — Offizielles Getting Started
* [Vitest: Features](https://vitest.dev/guide/features.html) — Features und Vergleich zu Jest
* [Angular: Testing](https://angular.dev/guide/testing) — Angular Testing Guide

## 🤔 Reflexionsfragen

* Was sind die Hauptunterschiede zwischen Jest und Vitest? Warum ist Vitest in Vite-basierten Projekten oft die bessere Wahl?
* Warum bietet Angular einen eigenen Builder (`@angular/build:unit-test`) für Vitest an, statt Vitest direkt zu verwenden?
* Welche konkreten API-Unterschiede gibt es zwischen `jest.fn()` und `vi.fn()`? Was passiert, wenn Du vergisst, die Imports umzustellen?
* In welchen Situationen würdest Du Jest gegenüber Vitest bevorzugen? Gibt es Ökosystem-Aspekte, die bei der Entscheidung eine Rolle spielen?
