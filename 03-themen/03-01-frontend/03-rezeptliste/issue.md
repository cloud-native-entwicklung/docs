---
layout: default
title: Rezeptliste anzeigen
---

# Rezeptliste mit Material Cards anzeigen

Unsere App soll eine Übersicht aller Rezepte zeigen. (siehe [Lastenheft](../lastenheft.md)) Dazu erstellen wir eine Komponente, die Rezeptdaten als ansprechende Karten in einem Grid-Layout darstellt. Zunächst arbeiten wir mit Dummy-Daten direkt in der Komponente.

## 🎯 Lernziele

* Du kannst eigene Angular-Komponenten mit der CLI erzeugen und in die Anwendung einbinden.
* Du kannst Angular Material Cards (`mat-card`) einsetzen und in einem responsiven Grid-Layout anordnen.
* Du verstehst die Template-Syntax von Angular (`@for`, Property Binding, Interpolation).

## ✅ Definition of Done

* [ ] Es existiert ein Domänenmodell für Rezepte und Zutaten.
* [ ] Eine `RecipeListComponent` zeigt Rezepte als Material Cards in einem Grid-Layout an.
* [ ] Mindestens 6 Beispielrezepte sind als Dummy-Daten hinterlegt.
* [ ] Die Standard-Template-Inhalte von `app.component` sind durch eine Toolbar und die Rezeptliste ersetzt.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Definiere die TypeScript-Interfaces für das Domänenmodell (Rezept, Zutat, Schwierigkeitsgrad, Mengeneinheit).
2. Erzeuge eine `RecipeListComponent` und implementiere die Darstellung mit Material Cards und Grid-CSS.
3. Ersetze den Standardinhalt der `AppComponent` durch eine Toolbar und die Rezeptliste.

## 📚 Selbstlernmaterial

* [Angular: Components](https://angular.dev/guide/components) — Komponentengrundlagen
* [Angular: Templates](https://angular.dev/guide/templates) — Template-Syntax
* [Angular: Control Flow (@for, @if)](https://angular.dev/guide/templates/control-flow) — Kontrollfluss in Templates

## 🤔 Reflexionsfragen

* Warum verwenden wir TypeScript-Interfaces statt Klassen für das Domänenmodell?
* Was passiert im Template, wenn die Rezeptliste leer ist?
* Wie hängen Angular-Komponenten und das DOM im Browser zusammen?
