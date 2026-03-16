---
layout: default
title: Rezepte validieren
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
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Schreibe Tests für verschiedene ungültige Eingaben, z.B. ein fehlender oder zu langer Name beim Anlegen eines Rezepts.
2. Füge `quarkus-hibernate-validator` als Abhängigkeit hinzu.
3. Annotiere die Felder von `Recipe` und `Ingredient` mit passenden Validation-Constraints.

## 📚 Selbstlernmaterial

* [Quarkus: Validation Guide](https://quarkus.io/guides/validation) — Validierung in Quarkus
* [Jakarta Bean Validation](https://jakarta.ee/specifications/bean-validation/) — Spezifikation
* [Baeldung: Bean Validation Basics](https://www.baeldung.com/java-validation) — Einstieg in Bean Validation

## 🤔 Reflexionsfragen

* Warum ist deklarative Validierung (Annotationen) besser wartbar als imperative Validierung (if-else im Code)?
* Warum sind parametrisierte Tests für Validierung besonders geeignet?
