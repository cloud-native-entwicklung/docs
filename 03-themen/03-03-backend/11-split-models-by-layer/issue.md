---
layout: default
title: Modelle pro Schicht
---

# Schichtspezifische Modelle einführen

Aktuell werden dieselben Klassen für die REST-Schnittstelle, die Geschäftslogik und die Datenbankpersistenz verwendet. Das führt dazu, dass eine Klasse Framework-Annotationen aus allen Schichten trägt. Wir trennen die Modelle, damit jede Schicht ihre eigenen, zweckgebundenen Klassen hat.

## 🎯 Lernziele

* Du verstehst, warum dieselbe Klasse nicht gleichzeitig als DTO, Domänenobjekt und JPA-Entity dienen sollte.
* Du kannst DTOs (mit Validierungs- und JSON-Annotationen), Domänen-POJOs (ohne Framework-Abhängigkeiten) und JPA-Entities (mit Datenbank-Annotationen) voneinander trennen.
* Du kannst Mapper implementieren, die Objekte zwischen den Schichten transformieren.
* Du erkennst den Mehrwert eines von Frameworks entkoppelten Domänenmodells.

## ✅ Definition of Done

* [ ] Es gibt DTOs (`RecipeDto`, `IngredientDto`) im Boundary-Paket mit Validierungs- und JSON-Annotationen.
* [ ] Das Domänenmodell besteht aus reinen POJOs ohne Framework-Annotationen.
* [ ] JPA-Entities (`RecipeEntity`, `IngredientEntity`) im Persistence-Paket tragen nur Datenbank-Annotationen.
* [ ] Für jeden Schichtübergang existieren Mapper-Klassen.
* [ ] Alle Tests laufen weiterhin erfolgreich.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle DTOs im Boundary-Paket und verschiebe Validierungs- und JSON-Annotationen dorthin.
2. Bereinige die Domänenklassen, sodass sie keine Framework-Annotationen mehr tragen.
3. Erstelle JPA-Entities im Persistence-Paket mit den Datenbank-Annotationen.
4. Implementiere Mapper-Klassen für die Übergänge Boundary-Domain und Domain-Persistence.

## 📚 Selbstlernmaterial

* [Baeldung: DTO Pattern](https://www.baeldung.com/java-dto-pattern) — Das DTO-Pattern
* [MapStruct](https://mapstruct.org/) — Framework für Object-Mapping
* [Baeldung: MapStruct Guide](https://www.baeldung.com/mapstruct) — Einführung in MapStruct

## 🤔 Reflexionsfragen

* Welche Probleme entstehen, wenn eine Klasse gleichzeitig `@Entity`, `@JsonProperty` und `@NotNull` trägt? Denke an Änderungen in einer Schicht.
* Warum sollte das Domänenmodell frei von Framework-Annotationen sein? Was gewinnt man dadurch?
* Die Mapper-Klassen bedeuten zusätzlichen Code. Ab wann überwiegt der Nutzen der Trennung gegenüber dem Aufwand? Gibt es Projekte, in denen ein gemeinsames Modell sinnvoller wäre?
* Welche Bibliotheken (z.B. MapStruct) könnten die Mapper-Implementierung vereinfachen? Welche Vor- und Nachteile hätte das?
