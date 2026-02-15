---
layout: default
title: Rezepte validieren
parent: Backend
grand_parent: Trainerleitfaden
nav_order: 3
has_toc: false
---

# Rezepte mit Bean Validation validieren

Ein Rezept ohne Namen oder mit negativer Portionsanzahl sollte gar nicht erst angelegt werden können. Wir nutzen Bean Validation (Hibernate Validator), um fachliche Regeln direkt am Domänenmodell zu definieren.

## 🎯 Lernziele

* Du verstehst das Konzept der deklarativen Validierung mit Bean Validation und warum es gegenüber manueller Prüfung im Code vorteilhaft ist.
* Du kannst Standard-Constraints wie `@NotNull`, `@Size`, `@Positive`, `@Min` und `@Pattern` an Modellklassen einsetzen.
* Du weißt, wie `@Valid` die Validierung verschachtelter Objekte auslöst.
* Du kannst parametrisierte Tests schreiben, die viele ungültige Eingaben systematisch abdecken.

## ✅ Definition of Done

* [ ] Die Abhängigkeit `quarkus-hibernate-validator` ist im Projekt eingebunden.
* [ ] `Recipe` und `Ingredient` sind mit geeigneten Validation-Constraints annotiert (z.B. Name nicht leer, Portionen positiv, Bild-URL gültiges Format).
* [ ] Der REST-Endpunkt validiert eingehende Objekte mit `@Valid`.
* [ ] Ungültige Requests liefern Status 400.
* [ ] Es gibt parametrisierte Tests, die mindestens 10 verschiedene ungültige Eingaben prüfen.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Füge `quarkus-hibernate-validator` als Abhängigkeit hinzu.
2. Annotiere die Felder von `Recipe` und `Ingredient` mit passenden Validation-Constraints.
3. Ergänze `@Valid` am Resource-Method-Parameter und an verschachtelten Feldern.
4. Schreibe parametrisierte Tests für verschiedene ungültige Eingaben.

## 🤔 Reflexionsfragen

* Warum ist deklarative Validierung (Annotationen) besser wartbar als imperative Validierung (if-else im Code)?
* Was passiert, wenn Du `@Valid` an der `ingredients`-Liste vergisst? Werden die Zutaten trotzdem validiert?
* Wie würdest Du eine Validierungsregel umsetzen, die sich nicht durch Standard-Annotationen ausdrücken lässt -- z.B. "mindestens eine Zutat muss vorhanden sein"?
* Warum sind parametrisierte Tests für Validierung besonders geeignet? Welchen Vorteil haben sie gegenüber einzelnen Testmethoden?
