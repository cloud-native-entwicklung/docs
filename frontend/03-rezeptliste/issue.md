---
layout: default
title: Rezeptliste anzeigen
parent: Frontend
grand_parent: Übungen
nav_order: 3
has_toc: false
---

# Rezeptliste mit Material Cards anzeigen

Unsere App soll eine Übersicht aller Rezepte zeigen. Dazu erstellen wir eine Komponente, die Rezeptdaten als ansprechende Karten in einem Grid-Layout darstellt. Zunächst arbeiten wir mit Dummy-Daten direkt in der Komponente.

## 🎯 Lernziele

* Du kannst eigene Angular-Komponenten mit der CLI erzeugen und in die Anwendung einbinden.
* Du kannst TypeScript-Interfaces und Enums als Domänenmodell entwerfen.
* Du kannst Angular Material Cards (`mat-card`) einsetzen und in einem responsiven Grid-Layout anordnen.
* Du verstehst die Template-Syntax von Angular (`@for`, Property Binding, Interpolation).

## ✅ Definition of Done

* [ ] Es existiert ein Domänenmodell mit den Typen `Recipe`, `Difficulty`, `Ingredient` und `IngredientUnit`.
* [ ] Eine `RecipeListComponent` zeigt Rezepte als Material Cards in einem Grid-Layout an.
* [ ] Mindestens 6 Beispielrezepte sind als Dummy-Daten hinterlegt.
* [ ] Die Standard-Template-Inhalte von `app.component` sind durch eine Toolbar und die Rezeptliste ersetzt.
* [ ] Rezeptbilder werden in den Karten angezeigt.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Definiere die TypeScript-Interfaces und Enums für das Domänenmodell (Rezept, Zutat, Schwierigkeitsgrad, Mengeneinheit).
2. Erzeuge eine `RecipeListComponent` und implementiere die Darstellung mit Material Cards und Grid-CSS.
3. Ersetze den Standardinhalt der `AppComponent` durch eine Toolbar und die Rezeptliste.

## 🤔 Reflexionsfragen

* Warum verwenden wir TypeScript-Interfaces statt Klassen für das Domänenmodell? In welchem Fall wären Klassen die bessere Wahl?
* Welchen Vorteil bieten Enums (`Difficulty`, `IngredientUnit`) gegenüber einfachen Strings? Welche Nachteile haben sie?
* Warum ist es sinnvoll, Dummy-Daten zu verwenden, bevor ein Backend angebunden ist? Welche Vorteile hat das für den Entwicklungsprozess?
* Was passiert im Template, wenn die Rezeptliste leer ist? Wie könntest Du diesen Fall behandeln?
