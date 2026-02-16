---
layout: default
title: Jest-Test-Framework einrichten
---

# Test-Infrastruktur von Karma/Jasmine auf Jest migrieren

Angular verwendet standardmässig Karma als Test-Runner und Jasmine als Assertion-Bibliothek. In der Praxis hat sich Jest als schnellere und vielseitigere Alternative etabliert. Wir migrieren die Test-Infrastruktur auf Jest.

## 🎯 Lernziele

* Du verstehst die Rolle von Test-Runner, Test-Framework und Assertion-Bibliothek und wie diese bei Karma/Jasmine und Jest aufgeteilt sind.
* Du kannst die Test-Infrastruktur eines Angular-Projekts von Karma/Jasmine auf Jest migrieren.
* Du kannst eine Jest-Konfiguration mit Path-Aliases und der richtigen Test-Umgebung (`jsdom`) einrichten.
* Du verstehst, welche Abhängigkeiten entfernt und welche hinzugefügt werden müssen.

## ✅ Definition of Done

* [ ] Karma und Jasmine sind als Abhängigkeiten entfernt.
* [ ] `jest`, `@angular-builders/jest` und `jest-environment-jsdom` sind installiert.
* [ ] Eine `jest.config.ts` mit Path-Aliases und jsdom-Umgebung ist erstellt.
* [ ] Die `tsconfig.spec.json` verwendet Jest-Typen statt Jasmine-Typen.
* [ ] Ein `test:watch`-Script ist in der `package.json` eingerichtet.
* [ ] Die bestehenden Tests laufen erfolgreich mit Jest.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Entferne Karma- und Jasmine-Abhängigkeiten und füge Jest mit den nötigen Paketen hinzu.
2. Erstelle eine `jest.config.ts` und passe die TypeScript-Konfiguration für Tests an.
3. Passe bestehende Tests an und überprüfe, dass sie mit `ng test` bzw. `npm test` durchlaufen.

## 📚 Selbstlernmaterial

* [Jest Dokumentation](https://jestjs.io/docs/getting-started) — Offizielles Getting Started
* [Jest: Matchers](https://jestjs.io/docs/using-matchers) — Assertions und Matcher
* [Angular: Testing](https://angular.dev/guide/testing) — Angular Testing Guide

## 🤔 Reflexionsfragen

* Was sind die wesentlichen Unterschiede zwischen Karma/Jasmine und Jest? Warum bevorzugen viele Teams Jest?
* Warum braucht Jest eine `jsdom`-Umgebung? Was ist der Unterschied zwischen jsdom und einem echten Browser wie bei Karma?
* Welche Risiken birgt eine Migration des Test-Frameworks in einem bestehenden Projekt? Worauf musst Du besonders achten?
* Warum ist es wichtig, dass Path-Aliases in der Jest-Konfiguration mit der TypeScript-Konfiguration übereinstimmen?
