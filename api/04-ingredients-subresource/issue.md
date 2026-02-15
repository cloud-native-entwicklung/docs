---
layout: default
title: Ingredients Subresource
---

# Zutaten als eigenständige Ressource mit Subresource-Pattern

Bisher sind Zutaten direkt im Rezept eingebettet. Das führt zu Problemen: Zutatennamen werden inkonsistent geschrieben, Einheiten variieren und es gibt keine Möglichkeit, eine zentrale Zutatenliste zu pflegen. Wir refaktorisieren die API so, dass Zutaten eigenständige Katalog-Entitäten werden. Die Zuordnung von Zutaten zu Rezepten bilden wir über ein Subresource-Pattern ab.

## 🎯 Lernziele

* Du verstehst den Unterschied zwischen eingebetteten Daten und eigenständigen Ressourcen und kannst erklären, wann welcher Ansatz angemessen ist.
* Du kannst eine Katalog-Ressource (`Ingredient` mit `id`, `name`, `unit`) mit vollständigem CRUD entwerfen.
* Du kannst das Subresource-Pattern (`/recipes/{id}/ingredients/{ingredientId}`) anwenden, um Beziehungen zwischen Ressourcen in der URL-Struktur auszudrücken.
* Du kannst eine OpenAPI-Spezifikation mit mehreren Tags strukturieren, um zusammengehörige Endpunkte logisch zu gruppieren.
* Du verstehst, wie sich ein solches Refactoring auf bestehende Schemas und Endpunkte auswirkt und kannst Breaking Changes identifizieren.

## ✅ Definition of Done

* [ ] Es gibt eine eigenständige Katalog-Ressource `Ingredient` (mit `id`, `name`, `unit`) mit den Endpunkten `GET /ingredients`, `POST /ingredients`, `GET /ingredients/{id}`, `PUT /ingredients/{id}` und `DELETE /ingredients/{id}`.
* [ ] Die Zuordnung von Zutaten zu Rezepten erfolgt über Subresource-Endpunkte: `GET /recipes/{id}/ingredients`, `GET /recipes/{id}/ingredients/{ingredientId}`, `PUT /recipes/{id}/ingredients/{ingredientId}` und `DELETE /recipes/{id}/ingredients/{ingredientId}`.
* [ ] Das bisherige `ingredients`-Feld ist aus dem `Recipe`-Schema entfernt.
* [ ] Es existieren neue Schemas: `IngredientPage`, `RecipeIngredientAssignment` und `RecipeIngredientAssignmentPage`.
* [ ] Die Endpunkte sind über Tags (`recipes`, `ingredients`, `ingredient assignments`) logisch gruppiert.
* [ ] Die Spezifikation ist valide und kann fehlerfrei gerendert werden.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Entwirf die Katalog-Ressource `Ingredient` mit den Feldern `id`, `name` und `unit` sowie die zugehörigen CRUD-Endpunkte unter `/ingredients`.
2. Erstelle die Subresource-Endpunkte unter `/recipes/{id}/ingredients/{ingredientId}` für die Zuordnung von Zutaten zu Rezepten, einschließlich eines `RecipeIngredientAssignment`-Schemas.
3. Entferne das `ingredients`-Feld aus dem `Recipe`-Schema und erstelle die Pagination-Schemas `IngredientPage` und `RecipeIngredientAssignmentPage`.
4. Führe Tags (`recipes`, `ingredients`, `ingredient assignments`) ein, um die Endpunkte in der Dokumentation übersichtlich zu gruppieren.

## 🤔 Reflexionsfragen

* Welche Vorteile hat es, Zutaten als eigenständige Katalog-Ressource zu führen, anstatt sie direkt im Rezept einzubetten? Denke dabei an Datenqualität, Wiederverwendbarkeit und Konsistenz.
* Warum modellieren wir die Zuordnung als Subresource (`/recipes/{id}/ingredients/...`) und nicht als eigene Top-Level-Ressource (z.B. `/recipe-ingredient-assignments`)? Wann wäre der Top-Level-Ansatz die bessere Wahl?
* Warum verwenden wir `PUT` statt `POST` für die Zuordnung einer Zutat zu einem Rezept? Welche Eigenschaft von `PUT` macht ihn hier zum passenderen HTTP-Verb?
* Dieses Refactoring ist ein Breaking Change für bestehende Clients. Welche Strategien gibt es, um solche Änderungen in einer produktiven API einzuführen, ohne bestehende Clients sofort zu brechen?
* Die `Ingredient`-Ressource hat bewusst kein `quantity`-Feld, denn die Menge gehört zur Zuordnung, nicht zur Zutat selbst. Warum ist diese Trennung wichtig? Was würde passieren, wenn die Menge Teil der Katalog-Zutat wäre?
