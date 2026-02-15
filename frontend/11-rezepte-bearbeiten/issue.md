---
layout: default
title: Rezepte bearbeiten
parent: Frontend
grand_parent: Übungen
nav_order: 11
has_toc: false
---

# Formular zum Bearbeiten bestehender Rezepte erweitern

Das Formular kann aktuell nur neue Rezepte anlegen. Jetzt erweitern wir es so, dass es auch zum Bearbeiten bestehender Rezepte genutzt werden kann. Die Komponente erkennt anhand der Route, ob ein neues Rezept angelegt oder ein bestehendes bearbeitet wird.

## 🎯 Lernziele

* Du kannst eine Komponente so gestalten, dass sie sowohl für das Anlegen als auch das Bearbeiten von Datensätzen verwendet wird.
* Du verstehst, wie `patchValue()` ein reaktives Formular mit bestehenden Daten vorbefüllt.
* Du kannst optionale Routen-Parameter nutzen und die Komponentenlogik dynamisch anpassen.
* Du verstehst das Konzept eines Type Guards (`isDefined()`) und seinen Nutzen für Typsicherheit.

## ✅ Definition of Done

* [ ] Eine Route `recipes/edit/:recipeId` führt zum Bearbeitungsformular.
* [ ] Die `RecipeFormComponent` akzeptiert einen optionalen `recipeId`-Input.
* [ ] Beim Bearbeiten wird das bestehende Rezept geladen und das Formular mit `patchValue()` vorbefüllt.
* [ ] Der Formulartitel passt sich dynamisch an (z.B. "Neues Rezept" vs. "Rezept bearbeiten").
* [ ] Beim Absenden wird je nach Modus entweder `createRecipe()` oder `updateRecipe()` aufgerufen.
* [ ] Auf der Detail-Ansicht gibt es einen Bearbeiten-Button.
* [ ] Eine `isDefined()` Type-Guard-Utility-Funktion ist implementiert.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Richte die Route `recipes/edit/:recipeId` ein und ergänze den optionalen `recipeId`-Input in der Formularkomponente.
2. Lade bei vorhandener `recipeId` das Rezept und befülle das Formular mit `patchValue()`. Passe Titel und Submit-Logik dynamisch an.
3. Füge auf der Detail-Ansicht einen Bearbeiten-Button hinzu und implementiere die `isDefined()` Utility-Funktion.

## 🤔 Reflexionsfragen

* Welche Vor- und Nachteile hat es, dieselbe Komponente für Anlegen und Bearbeiten zu verwenden, statt zwei separate Komponenten zu erstellen?
* Was ist der Unterschied zwischen `patchValue()` und `setValue()` bei Reactive Forms? Wann ist welche Methode die richtige Wahl?
* Was ist ein Type Guard und warum verbessert `isDefined()` die Typsicherheit? In welchen anderen Situationen könntest Du eigene Type Guards einsetzen?
* Wie würdest Du verhindern, dass zwei Benutzer gleichzeitig dasselbe Rezept bearbeiten? Welche Strategien (optimistic/pessimistic locking) gibt es dafür?
