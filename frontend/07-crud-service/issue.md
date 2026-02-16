---
layout: default
title: CRUD-Service erweitern
---

# Service um vollständige CRUD-Operationen erweitern

Bisher kann unser Service nur Rezepte laden. Für eine vollständige Rezepteverwaltung brauchen wir auch die Möglichkeit, einzelne Rezepte abzurufen, neue anzulegen, bestehende zu aktualisieren und zu löschen.

## 🎯 Lernziele

* Du kannst die HTTP-Methoden GET, POST, PUT und DELETE mit dem `HttpClient` verwenden.
* Du verstehst das Konzept von Type Aliases (`RecipeDraft`, `RecipeUpdate`) zur Unterscheidung verschiedener Zustände eines Domänenobjekts.
* Du kannst Reverse-Mapping-Funktionen (Domäne zu DTO) implementieren.
* Du verstehst, wie eine gemeinsame `baseUrl` die Wartbarkeit des Service verbessert.

## ✅ Definition of Done

* [ ] Der Service bietet die Methoden `getRecipe(id)`, `createRecipe(draft)`, `updateRecipe(recipe)` und `deleteRecipe(id)`.
* [ ] Type Aliases `RecipeDraft` und `RecipeUpdate` sind definiert.
* [ ] Reverse-Mapping-Funktionen (Domäne zu DTO) sind implementiert.
* [ ] Eine gemeinsame `baseUrl` ist als Konstante im Service extrahiert.
* [ ] Alle Methoden geben typisierte Observables zurück.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Definiere die Type Aliases `RecipeDraft` (ohne ID) und `RecipeUpdate` (mit ID) für die verschiedenen Anwendungsfälle.
2. Implementiere Reverse-Mapping-Funktionen, die Domänenobjekte in DTOs umwandeln.
3. Extrahiere eine `baseUrl`-Konstante und implementiere die fehlenden Service-Methoden mit den passenden HTTP-Methoden.

## 📚 Selbstlernmaterial

* [Angular: HttpClient](https://angular.dev/guide/http) — Offizielles HTTP-Guide
* [Angular: Making HTTP Requests](https://angular.dev/guide/http/making-requests) — POST, PUT, DELETE
* [MDN: HTTP Request Methods](https://developer.mozilla.org/de/docs/Web/HTTP/Methods) — Übersicht der HTTP-Methoden

## 🤔 Reflexionsfragen

* Warum unterscheiden wir zwischen `RecipeDraft` (anlegen) und `RecipeUpdate` (aktualisieren)? Könnten wir nicht einfach `Recipe` für beides verwenden?
* Welche HTTP-Methode verwendest Du für das Aktualisieren und warum? Was ist der Unterschied zwischen PUT und PATCH?
* Warum brauchen wir Mapping-Funktionen in beide Richtungen (DTO zu Domäne und Domäne zu DTO)? Wäre es nicht einfacher, nur ein Modell zu haben?
* Was passiert, wenn Du `deleteRecipe()` aufrufst, aber das Observable nie abonnierst? Warum ist das ein häufiger Fehler?
