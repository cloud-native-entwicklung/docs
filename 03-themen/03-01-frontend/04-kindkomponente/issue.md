---
layout: default
title: Kindkomponente extrahieren
---

# Kindkomponente für einzelne Rezeptkarten extrahieren

Die `RecipeListComponent` enthält aktuell sowohl die Listenlogik als auch das Rendering jeder einzelnen Karte. Um die Verantwortlichkeiten sauber zu trennen, extrahieren wir eine eigene Kindkomponente für das einzelne Listenelement.

## 🎯 Lernziele

* Du verstehst das Prinzip der Komponentenzerlegung (Smart/Container vs. Presentational Component).
* Du kannst Daten an eine Kindkomponente übergeben.
* Du verstehst, wie `@for` in Angular Templates funktioniert und wie Kindkomponenten darin eingesetzt werden.
* Du erkennst, wann es sinnvoll ist, eine Komponente zu extrahieren.

## ✅ Definition of Done

* [ ] Eine `RecipeListItemComponent` existiert und zeigt eine einzelne Rezeptkarte an.
* [ ] Die Komponente erhält das Rezept als Input.
* [ ] Die `RecipeListComponent` iteriert mit `@for` über die Rezepte und rendert pro Eintrag die Kindkomponente.
* [ ] Die Darstellung ist unverändert (kein visueller Unterschied zur vorherigen Version).
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erzeuge eine neue `RecipeListItemComponent` und verschiebe das Card-Template dorthin.
2. Definiere einen Signal-Input `input.required<Recipe>()` in der Kindkomponente.
3. Passe die `RecipeListComponent` an, sodass sie die Kindkomponente innerhalb von `@for` verwendet.

## 📚 Selbstlernmaterial

* [Angular: Component Interaction](https://angular.dev/guide/components/inputs) — Input-Properties
* [Angular: Component Output](https://angular.dev/guide/components/outputs) — Output-Events
* [Angular: Content Projection](https://angular.dev/guide/components/content-projection) — ng-content

## 🤔 Reflexionsfragen

* Was unterscheidet `input.required()` von `input()`?
* Was ist der Unterschied zwischen einer Container-Komponente und einer Presentational-Komponente? Welche Rolle übernimmt jeweils die Liste und das Listenelement?
* Wie beeinflusst die Komponentenzerlegung die Testbarkeit Deiner Anwendung?
<!-- * Welchen Vorteil hat die Signal-basierte API (`input.required()`) gegenüber dem klassischen `@Input()`-Decorator? -->
