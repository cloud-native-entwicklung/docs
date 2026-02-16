---
layout: default
title: Rezept-Formular erstellen
---

# Reaktives Formular zum Anlegen neuer Rezepte

Bisher können wir Rezepte nur anzeigen. Jetzt erstellen wir ein Formular, über das neue Rezepte angelegt werden können. Wir verwenden dafür Angulars Reactive Forms, die uns volle Kontrolle über Validierung und dynamische Formularfelder geben.

## 🎯 Lernziele

* Du kannst ein reaktives Formular mit `FormGroup`, `FormControl` und `FormArray` aufbauen.
* Du verstehst den Unterschied zwischen Template-Driven und Reactive Forms und kannst begründen, wann welcher Ansatz geeignet ist.
* Du kannst Validatoren (`Validators.required`, `Validators.min`, etc.) einsetzen und Fehlermeldungen benutzerfreundlich anzeigen.
* Du kannst ein dynamisches `FormArray` (z.B. für Zutaten) implementieren, in dem Einträge hinzugefügt und entfernt werden können.

## ✅ Definition of Done

* [ ] Eine `RecipeFormComponent` mit einem reaktiven Formular ist erstellt.
* [ ] Das Formular enthält Felder für Name, Dauer, Schwierigkeitsgrad, Portionen, Zutaten (dynamisch) und Zubereitung.
* [ ] Validatoren sind konfiguriert und deutschsprachige Fehlermeldungen werden angezeigt.
* [ ] Eine Fehleranzeige-Komponente (`FormErrorComponent`) zeigt kontextabhängige Fehlertexte.
* [ ] Eine Route `recipes/new` führt zum Formular und ist über ein Navigationsmenü erreichbar.
* [ ] Beim Absenden wird ein neues Rezept erstellt und zur Übersicht navigiert.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle die `RecipeFormComponent` mit einer `FormGroup` und den entsprechenden `FormControl`s, inklusive Validatoren.
2. Implementiere ein dynamisches `FormArray` für die Zutatenliste und eine Fehleranzeige-Komponente.
3. Richte die Route `recipes/new` ein, implementiere die Submit-Logik (Service-Aufruf + Navigation) und ergänze die Navigation.

## 📚 Selbstlernmaterial

* [Angular: Reactive Forms](https://angular.dev/guide/forms/reactive-forms) — Reactive Forms Guide
* [Angular: Form Validation](https://angular.dev/guide/forms/form-validation) — Validierung in Formularen
* [Angular Material: Form Field](https://material.angular.io/components/form-field/overview) — Material Form-Komponenten

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen Template-Driven Forms und Reactive Forms? Warum eignen sich Reactive Forms besser für komplexe Formulare?
* Warum verwenden wir ein `FormArray` für die Zutaten statt einer festen Anzahl von Feldern? Welche Herausforderung bringt die dynamische Natur mit sich?
* Wie funktioniert die Validierung in Reactive Forms? Warum zeigen wir Fehlermeldungen erst an, wenn das Feld "berührt" wurde (`touched`)?
* Was passiert mit dem Formular-State, wenn der Benutzer die Seite verlässt, ohne zu speichern? Wie könntest Du den Benutzer davor warnen?
