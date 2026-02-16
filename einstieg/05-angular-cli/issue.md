---
layout: default
title: Angular CLI kennenlernen
---

# Angular CLI kennenlernen

Die Angular CLI ist das zentrale Werkzeug, um Angular-Projekte zu erstellen, zu verwalten und zu starten. In dieser Übung installiert Ihr die CLI, erzeugt ein Projekt und erkundet die generierten Dateien — bevor wir in den folgenden Übungen die eigentliche Anwendung bauen.

## 🎯 Lernziele

* Du kannst die Angular CLI global installieren und mit `ng version` die Installation prüfen.
* Du kannst ein neues Angular-Projekt mit `ng new` erzeugen und verstehst die wichtigsten Optionen (Routing, Styles, SSR).
* Du kannst die Anwendung mit `ng serve` starten und im Browser aufrufen.
* Du verstehst die grundlegende Verzeichnisstruktur eines Angular-Projekts und die Rolle der zentralen Konfigurationsdateien.

## ✅ Definition of Done

* [ ] Die Angular CLI ist global installiert (`npm install -g @angular/cli`).
* [ ] Du hast ein neues Projekt erzeugt und es startet fehlerfrei mit `ng serve`.
* [ ] Du hast die Verzeichnisstruktur gesichtet und kannst die Rolle von `angular.json`, `tsconfig.json`, `package.json` und `src/app/` erklären.
* [ ] Du hast eine kleine Änderung an `app.component.html` vorgenommen und die Live-Aktualisierung im Browser beobachtet.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Installiere die Angular CLI global: `npm install -g @angular/cli`. Prüfe mit `ng version`, ob die Installation erfolgreich war.
2. Erzeuge ein neues Projekt: `ng new test-app`. Wähle die Optionen aus, die Dir sinnvoll erscheinen (Routing, Stylesheet-Format). Öffne das Projekt in Deiner IDE.
3. Starte die Anwendung mit `ng serve` und öffne `http://localhost:4200` im Browser. Ändere den Text in `src/app/app.component.html` und beobachte die automatische Aktualisierung.
4. Erkunde die generierten Dateien: Was steht in `angular.json`? Was in `tsconfig.json`? Welche Dateien liegen unter `src/app/`? Was ist die Rolle von `app.config.ts` und `app.routes.ts`?

## 📚 Selbstlernmaterial

* [Angular — Getting Started](https://angular.dev/tutorials/learn-angular) — Offizielles Angular-Tutorial
* [Angular CLI Dokumentation](https://angular.dev/tools/cli) — Referenz zu allen CLI-Befehlen
* [Angular: Projekt-Struktur](https://angular.dev/reference/configs/workspace-config) — Erklärung der Konfigurationsdateien

## 🤔 Reflexionsfragen

* Welche Dateien erzeugt `ng new`? Welche davon kennst Du schon aus den vorherigen Übungen (NPM, TypeScript)?
* Was ist der Unterschied zwischen `ng new` und `npm init`? Was erzeugt die Angular CLI zusätzlich?
* Warum startet Angular einen eigenen Development Server (`ng serve`) statt die Dateien direkt im Browser zu öffnen? Was passiert dabei im Hintergrund?
* Was ist der Unterschied zwischen `app.component.ts`, `app.component.html` und `app.component.css`? Welches Muster steckt dahinter?
* Was macht die Datei `app.config.ts` und warum gibt es kein `AppModule` mehr? Recherchiere den Begriff "Standalone Components".
