---
layout: default
title: Detail-Ansicht mit Routing
parent: Frontend
grand_parent: Übungen
nav_order: 9
has_toc: false
---

# Routing und Detail-Ansicht für einzelne Rezepte

Bisher zeigt unsere App nur die Listenübersicht. Jetzt wollen wir von einem Rezept in der Liste auf eine Detail-Ansicht navigieren können. Dazu konfigurieren wir das Angular Routing und erstellen eine Detailseite mit mehreren Unterkomponenten.

## 🎯 Lernziele

* Du kannst Routen in Angular definieren, darunter auch parametrisierte Routen (`recipes/:recipeId`).
* Du verstehst, wie `withComponentInputBinding()` Routen-Parameter automatisch als Component-Inputs bereitstellt.
* Du kannst mit `RouterLink` zwischen Ansichten navigieren.
* Du kannst eine komplexe Ansicht sinnvoll in mehrere Unterkomponenten aufteilen (Informationsliste, Zutatenliste, Zubereitungsbeschreibung).

## ✅ Definition of Done

* [ ] Routen sind konfiguriert: `''` leitet zur Rezeptliste, `recipes/:recipeId` zeigt die Detailseite.
* [ ] `withComponentInputBinding()` ist in der Router-Konfiguration aktiviert.
* [ ] Eine `RecipeDetailComponent` zeigt alle Informationen eines Rezepts an.
* [ ] Unterkomponenten sind erstellt: Informationsliste, Zutatenliste, Zubereitungsbeschreibung.
* [ ] Ein Löschen-Button mit Bestätigungsdialog ist implementiert.
* [ ] Die Rezeptkarten in der Liste sind per `RouterLink` mit der Detailseite verknüpft.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Konfiguriere die Routen in `app.routes.ts` und aktiviere `withComponentInputBinding()` in der Router-Konfiguration.
2. Erstelle die `RecipeDetailComponent` mit Unterkomponenten für die verschiedenen Bereiche der Detailansicht.
3. Implementiere einen Löschen-Button mit Bestätigungsdialog und die Navigation per `RouterLink` von der Liste zur Detailseite.

## 🤔 Reflexionsfragen

* Was macht `withComponentInputBinding()` genau? Wie würdest Du ohne diese Option an den Routen-Parameter kommen?
* Warum teilen wir die Detail-Ansicht in mehrere Unterkomponenten auf, statt alles in einer Komponente zu belassen?
* Was passiert, wenn ein Benutzer eine URL mit einer nicht existierenden Rezept-ID direkt im Browser eingibt? Wie sollte die Anwendung damit umgehen?
* Warum verwenden wir einen Bestätigungsdialog vor dem Löschen? Welche UX-Prinzipien stecken dahinter?
