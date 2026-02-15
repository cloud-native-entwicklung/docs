---
layout: default
title: Datenbankanbindung
parent: Backend
grand_parent: Trainerleitfaden
nav_order: 6
has_toc: false
---

# Datenbankanbindung mit Hibernate ORM und Panache

Bisher gehen alle Rezepte beim Neustart der Anwendung verloren. Wir ersetzen die In-Memory-Speicherung durch eine echte Datenbank (H2) und nutzen Hibernate ORM mit Panache als ORM-Framework.

## 🎯 Lernziele

* Du verstehst die Grundlagen von JPA und wie Klassen mit `@Entity`, `@Table`, `@Id`, `@GeneratedValue` und `@OneToMany` zu Datenbank-Tabellen gemappt werden.
* Du kannst Panache-Repositories erstellen und für CRUD-Operationen nutzen.
* Du weißt, wie `@Transactional` Transaktionsgrenzen definiert und warum das wichtig ist.
* Du kannst mit `@TestTransaction` sicherstellen, dass Tests sich nicht gegenseitig beeinflussen.

## ✅ Definition of Done

* [ ] Die Abhängigkeiten für H2 und Hibernate ORM with Panache sind eingebunden.
* [ ] `Recipe` und `Ingredient` sind als JPA-Entities konfiguriert (mit passenden Annotations für Tabellen, Primärschlüssel, Beziehungen).
* [ ] Ein `PanacheRepository` übernimmt die Datenbankzugriffe.
* [ ] Der Service nutzt das Repository statt der `ConcurrentHashMap`.
* [ ] Tests verwenden `@TestTransaction` für automatisches Rollback.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Füge die Abhängigkeiten für H2 und `quarkus-hibernate-orm-panache` hinzu und konfiguriere die Datenquelle.
2. Mache `Recipe` und `Ingredient` zu JPA-Entities mit den passenden Annotations.
3. Erstelle ein `PanacheRepository` und binde es im Service ein.
4. Passe die Tests an und nutze `@TestTransaction`.

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen dem Active-Record-Pattern und dem Repository-Pattern in Panache? Warum haben wir uns für das Repository-Pattern entschieden?
* Was passiert, wenn Du `@Transactional` vergisst? Welche Fehlermeldung würdest Du erwarten?
* Warum ist `@TestTransaction` für Tests wichtig? Was würde passieren, wenn Tests Daten in der Datenbank hinterlassen?
* Wie wird die Beziehung zwischen `Recipe` und `Ingredient` in der Datenbank abgebildet? Welche Tabellen und Fremdschlüssel entstehen?
