---
layout: default
title: Service einführen
---

# Service für die Datenverwaltung einführen

Die Rezeptdaten liegen aktuell direkt in der Komponente. Um die Datenlogik von der Darstellung zu trennen, führen wir einen Angular Service ein. Dieser kapselt den Datenzugriff und kann später einfach gegen eine echte Backend-Anbindung ausgetauscht werden.

## 🎯 Lernziele

* Du verstehst das Konzept der Dependency Injection in Angular und wie `@Injectable({providedIn: 'root'})` funktioniert.
* Du kannst einen Service mit der Angular CLI erzeugen und ihn mit `inject()` in einer Komponente verwenden.
* Du verstehst, warum die Trennung von Datenlogik und Darstellungslogik wichtig ist.
* Du kannst die Singleton-Eigenschaft von `providedIn: 'root'` erklären.

## ✅ Definition of Done

* [ ] Ein `RecipeService` existiert mit der Methode `getAllRecipes()`, die die Rezeptliste zurückgibt.
* [ ] Der Service ist mit `@Injectable({providedIn: 'root'})` dekoriert.
* [ ] Die Dummy-Daten sind in den Service verschoben.
* [ ] Die Komponente verwendet `inject(RecipeService)` statt eigener Daten.
* [ ] Die Anwendung funktioniert wie zuvor.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erzeuge einen `RecipeService` mit der Angular CLI.
2. Verschiebe die Dummy-Daten in den Service und stelle eine Methode `getAllRecipes()` bereit.
3. Verwende `inject(RecipeService)` in der Komponente, um die Daten vom Service zu beziehen.

## 🤔 Reflexionsfragen

* Was bedeutet `providedIn: 'root'`? Was wäre der Unterschied, wenn Du den Service stattdessen in `providers` einer Komponente registrierst?
* Warum verwenden wir `inject()` statt Constructor Injection? Welche Vor- und Nachteile hat jeder Ansatz?
* Welchen Vorteil hat es, die Daten im Service statt in der Komponente zu halten? Was würde passieren, wenn mehrere Komponenten denselben Service nutzen?
* Wie erleichtert der Service-Ansatz das spätere Austauschen der Datenquelle (z.B. von Dummy-Daten auf ein HTTP-Backend)?
