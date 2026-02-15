---
layout: default
title: Projekt aufsetzen
parent: Frontend
grand_parent: Trainerleitfaden
nav_order: 1
has_toc: false
---

# Angular-Projekt aufsetzen

Wir bauen eine Rezepteverwaltung als Single-Page-Application mit Angular. Der erste Schritt ist die Projektinitialisierung mit der Angular CLI. Wir erzeugen ein lauffähiges Grundgerüst, das als Basis für alle weiteren Übungen dient.

## 🎯 Lernziele

* Du kannst ein neues Angular-Projekt mit der Angular CLI erzeugen und die wichtigsten Optionen (Routing, Style-Präprozessor, SSR) gezielt auswählen.
* Du verstehst die Verzeichnisstruktur eines Angular-Projekts und die Rolle der zentralen Konfigurationsdateien (`angular.json`, `tsconfig.json`, `package.json`).
* Du kannst die Anwendung lokal starten und im Browser aufrufen.
* Du verstehst den Zusammenhang zwischen `app.config.ts`, `app.routes.ts` und `app.component.ts` im Standalone-Component-Modell.

## ✅ Definition of Done

* [ ] Ein Angular-Projekt wurde unter `recipes-app/` mit der Angular CLI erzeugt.
* [ ] Routing ist aktiviert, SCSS ist als Style-Präprozessor konfiguriert.
* [ ] Server-Side Rendering (SSR) ist deaktiviert.
* [ ] Die Anwendung startet fehlerfrei mit `ng serve` und ist im Browser erreichbar.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Installiere die Angular CLI global (falls noch nicht vorhanden) und erzeuge ein neues Projekt mit `ng new`.
2. Wähle die passenden Optionen: Routing aktivieren, SCSS als Stylesheet-Format, kein SSR.
3. Starte die Anwendung und überprüfe, ob die Startseite im Browser angezeigt wird.

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen `ng new` und `npm init`? Welche Dateien erzeugt die Angular CLI, die Du bei einem manuellen Setup selbst anlegen müsstest?
* Warum verwenden wir SCSS statt normalem CSS? In welchen Situationen lohnt sich ein Präprozessor?
* Was macht die Datei `app.config.ts` und warum gibt es kein `AppModule` mehr? Welches Konzept steckt hinter Standalone Components?
* Wann wäre Server-Side Rendering sinnvoll und warum deaktivieren wir es hier?
