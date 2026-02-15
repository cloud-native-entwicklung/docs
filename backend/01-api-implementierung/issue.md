---
layout: default
title: API-Implementierung
---

# Rezepte-API implementieren

Wir bauen eine Rezepteverwaltung als Backend-Service. Der erste Schritt ist eine REST-API, über die Rezepte angelegt und abgerufen werden können. Als Datenspeicher verwenden wir zunächst eine einfache In-Memory-Lösung.

## 🎯 Lernziele

* Du verstehst, wie JAX-RS-Ressourcen in Quarkus aufgebaut sind und wie HTTP-Methoden auf Java-Methoden gemappt werden.
* Du kannst ein Domänenmodell mit verschachtelten Objekten (Rezept, Zutat) und Enums entwerfen.
* Du kannst REST Assured verwenden, um automatisierte Integrationstests für Deine API zu schreiben.
* Du verstehst den Unterschied zwischen verschiedenen HTTP-Statuscodes (200, 201, 404) und setzt sie korrekt ein.

## ✅ Definition of Done

* [ ] Es gibt eine REST-Ressource unter `/recipes` mit Endpunkten für GET (alle), GET (nach ID) und POST.
* [ ] Das Domänenmodell umfasst `Recipe` (mit id, name, img, servings, lastEdited, duration, difficulty, ingredients, preparation), `Difficulty`-Enum, `Ingredient` (mit name, quantity, unit) und `IngredientUnit`-Enum.
* [ ] Rezepte werden in einer thread-sicheren In-Memory-Datenstruktur (`ConcurrentHashMap`) gespeichert.
* [ ] POST liefert Status 201 mit Location-Header zurück.
* [ ] GET nach ID liefert 404, wenn das Rezept nicht existiert.
* [ ] Es existieren REST-Assured-Tests für alle Endpunkte.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle die Modellklassen (`Recipe`, `Ingredient`, `Difficulty`, `IngredientUnit`) mit den nötigen Feldern.
2. Implementiere eine JAX-RS-Ressource mit den drei Endpunkten und einer `ConcurrentHashMap` als Speicher.
3. Schreibe REST-Assured-Tests, die das korrekte Verhalten der API überprüfen.

## 🤔 Reflexionsfragen

* Warum verwenden wir eine `ConcurrentHashMap` und nicht eine einfache `HashMap`? In welchen Situationen würde eine `HashMap` zu Problemen führen?
* Was ist der Unterschied zwischen Status 200 und 201? Warum sollte POST einen Location-Header zurückgeben?
* Warum testen wir mit REST Assured über HTTP und nicht direkt die Java-Methoden? Welche Fehler finden wir so, die ein Unit-Test nicht finden würde?
* Welche Nachteile hat die In-Memory-Speicherung? Was passiert bei einem Neustart der Anwendung?
