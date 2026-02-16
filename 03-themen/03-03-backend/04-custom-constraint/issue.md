---
layout: default
title: Custom Constraint
---

# Custom Composed Constraint für URL-Validierung

Das Feld `img` wird bislang mit einer Kombination aus `@Size` und `@Pattern` validiert. Das ist unübersichtlich und nicht wiederverwendbar. Wir erstellen eine eigene Constraint-Annotation `@ValidUrl`, die diese Regeln kapselt.

## 🎯 Lernziele

* Du verstehst das Konzept der Composed Constraints in Bean Validation und kannst eigene erstellen.
* Du kennst `@ReportAsSingleViolation` und weißt, warum es bei zusammengesetzten Constraints sinnvoll ist.
* Du erkennst, wann es sich lohnt, Validierungslogik in eine eigene Annotation auszulagern.

## ✅ Definition of Done

* [ ] Es existiert eine Annotation `@ValidUrl`, die als Composed Constraint die bisherige `@Size`- und `@Pattern`-Validierung ersetzt.
* [ ] Die Annotation verwendet `@ReportAsSingleViolation`, sodass nur eine Fehlermeldung ausgegeben wird.
* [ ] Das Feld `img` in `Recipe` verwendet die neue Annotation.
* [ ] Alle bisherigen Tests laufen weiterhin erfolgreich.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle eine eigene Annotation `@ValidUrl` mit den Meta-Annotationen `@Size`, `@Pattern` und `@ReportAsSingleViolation`.
2. Ersetze die bisherigen Annotationen am `img`-Feld durch `@ValidUrl`.
3. Stelle sicher, dass alle Tests weiterhin grün sind.

## 📚 Selbstlernmaterial

* [Quarkus: Validation Guide](https://quarkus.io/guides/validation) — Validierung in Quarkus
* [Baeldung: Creating a Custom Validator](https://www.baeldung.com/spring-mvc-custom-validator) — Custom Constraint erstellen
* [Jakarta Bean Validation: Custom Constraints](https://jakarta.ee/specifications/bean-validation/3.0/jakarta-bean-validation-spec-3.0.html#constraintsdefinitionimplementation) — Spezifikation

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen einem Composed Constraint und einem Constraint mit eigenem Validator (`ConstraintValidator`)? Wann würdest Du welchen Ansatz wählen?
* Was bewirkt `@ReportAsSingleViolation` konkret? Was würde ohne diese Annotation passieren, wenn sowohl `@Size` als auch `@Pattern` verletzt sind?
* Welche weiteren Kandidaten für Custom Constraints siehst Du im bisherigen Domänenmodell?
