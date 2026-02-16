---
layout: default
title: NPM-Einstieg
---

# NPM-Einstieg: Node Package Manager verstehen

NPM ist das zentrale Werkzeug für die Verwaltung von JavaScript-Projekten und deren Abhängigkeiten. In dieser Übung arbeitet Ihr ein Tutorial durch und versteht die Grundkonzepte, die wir für Angular und TypeScript brauchen.

## 🎯 Lernziele

* Du kannst ein neues NPM-Projekt initialisieren und die Rolle der `package.json` erklären.
* Du verstehst den Unterschied zwischen `npm install` und `npm ci` und weißt, wann Du welchen Befehl verwendest.
* Du kannst die Funktion der `package-lock.json` erklären und weißt, warum sie ins Repository gehört.
* Du verstehst Semantic Versioning (SemVer) und die Bedeutung von `^`, `~` und exakten Versionsangaben.
* Du kannst NPM-Scripts definieren und ausführen.

## ✅ Definition of Done

* [ ] Du hast das Tutorial [npm-first-steps](https://github.com/ueberfuhr-tutorials/npm-first-steps) durchgearbeitet.
* [ ] Du kannst `npm init`, `npm install` und `npm ci` sicher anwenden.
* [ ] Du kannst den Unterschied zwischen `dependencies` und `devDependencies` erklären.
* [ ] Du hast eigene NPM-Scripts in der `package.json` definiert und ausgeführt.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Klone das Tutorial-Repository [npm-first-steps](https://github.com/ueberfuhr-tutorials/npm-first-steps) und lies die README. Arbeite die Schritte durch.
2. Erstelle zusätzlich ein eigenes leeres Projekt mit `npm init`. Installiere ein Paket Deiner Wahl (z.B. `chalk` oder `lodash`) und beobachte, was sich in `package.json` und `node_modules` ändert.
3. Lösche den `node_modules`-Ordner und stelle ihn einmal mit `npm install` und einmal mit `npm ci` wieder her. Beobachte die Unterschiede.
4. Definiere in der `package.json` ein eigenes Script (z.B. `"hello": "echo Hallo Welt"`) und führe es mit `npm run hello` aus.

## 📚 Selbstlernmaterial

* [NPM-Tutorial: npm-first-steps](https://github.com/ueberfuhr-tutorials/npm-first-steps) — Das Tutorial-Repository
* [NPM Docs](https://docs.npmjs.com/) — Offizielle NPM-Dokumentation
* [Semantic Versioning (semver.org)](https://semver.org/lang/de/) — Die SemVer-Spezifikation auf Deutsch
* [NPM: package-lock.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json) — Offizielle Dokumentation zur Lock-Datei

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen `npm install` und `npm ci`? In welchem Kontext (Entwicklung vs. CI/CD-Pipeline) verwendest Du welchen Befehl?
* Wozu dient die `package-lock.json`? Was passiert, wenn Du sie löschst und dann `npm install` ausführst?
* Was bedeutet die Versionsangabe `^1.2.3`? Was ist der Unterschied zu `~1.2.3` und `1.2.3`? Erkläre anhand von Semantic Versioning (Major.Minor.Patch).
* Warum sollte der Ordner `node_modules` nicht ins Git-Repository eingecheckt werden? Wie stellt man sicher, dass alle Teammitglieder die gleichen Versionen verwenden?
* Was ist der Unterschied zwischen `dependencies` und `devDependencies`? Nenne jeweils ein Beispiel.
