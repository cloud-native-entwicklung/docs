---
layout: default
title: Umgebungskonfiguration
---

# Umgebungsspezifische Konfiguration einrichten

Die Backend-URL ist aktuell fest im Service hinterlegt. Für einen professionellen Entwicklungsprozess brauchen wir unterschiedliche Konfigurationen für Entwicklung und Produktion. Angular bietet dafür ein Environment-Konzept mit Dateiersetzung beim Build.

## 🎯 Lernziele

* Du verstehst das Environment-Konzept von Angular und die Dateiersetzung (`fileReplacements`) in `angular.json`.
* Du kannst ein typisiertes Environment-Interface definieren und verschiedene Umgebungen (Development, Production) konfigurieren.
* Du kannst TypeScript-Path-Aliases einrichten, um Imports kürzer und lesbarer zu machen.
* Du verstehst, wie die Build-Konfiguration die richtige Environment-Datei auswählt.

## ✅ Definition of Done

* [ ] Ein `Environment`-Interface ist definiert (mit `apiBaseUrl` und weiteren Feldern).
* [ ] Die Dateien `environment.ts` (Production) und `environment.development.ts` existieren mit passenden Werten.
* [ ] In `angular.json` ist die `fileReplacements`-Konfiguration für den Development-Build eingerichtet.
* [ ] Ein TypeScript-Path-Alias `@app/environments` ermöglicht kurze Import-Pfade.
* [ ] Der `RecipeService` verwendet `environment.apiBaseUrl` statt einer hart kodierten URL.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle ein `Environment`-Interface und die beiden Environment-Dateien mit den jeweiligen Werten.
2. Konfiguriere die Dateiersetzung in `angular.json` und richte den TypeScript-Path-Alias ein.
3. Ersetze im Service die hart kodierte URL durch den Wert aus dem Environment.

## 🤔 Reflexionsfragen

* Warum werden die Environment-Dateien zur Build-Zeit und nicht zur Laufzeit ersetzt? Welche Konsequenz hat das für das Deployment?
* Wie unterscheidet sich dieser Ansatz von Umgebungsvariablen (`process.env`) in Node.js? Was sind die Vor- und Nachteile?
* Warum definieren wir ein TypeScript-Interface für das Environment? Was passiert, wenn Du in einer Umgebungsdatei eine Eigenschaft vergisst?
* In welchen Fällen wäre eine Laufzeitkonfiguration (z.B. über eine JSON-Datei beim Startup) besser geeignet als die Build-Zeit-Ersetzung?
