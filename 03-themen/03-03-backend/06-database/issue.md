---
layout: default
title: Datenbankanbindung
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
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Füge die Abhängigkeiten für Hibernate ORM und den H2-Treiber zum Projekt hinzu und konfiguriere die Datenquelle.
2. Mache `Recipe` und `Ingredient` zu JPA-Entities mit den passenden Annotations.
3. Erstelle ein `PanacheRepository` und binde es im Service ein.
4. Passe die Tests an und nutze `@TestTransaction`.

## 📚 Selbstlernmaterial

* [Quarkus: Hibernate ORM Guide](https://quarkus.io/guides/hibernate-orm) — Datenbankanbindung mit Hibernate
* [Quarkus: Datasource Configuration](https://quarkus.io/guides/datasource) — Datenquellen konfigurieren
* [Jakarta Persistence (JPA)](https://jakarta.ee/specifications/persistence/) — Spezifikation
* [Baeldung: JPA Tutorial](https://www.baeldung.com/learn-jpa-hibernate) — Einstieg in JPA und Hibernate

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen dem Active-Record-Pattern und dem Repository-Pattern in Panache? Warum haben wir uns für das Repository-Pattern entschieden?
* Was passiert, wenn Du `@Transactional` vergisst? Welche Fehlermeldung würdest Du erwarten?
* Warum ist `@TestTransaction` für Tests wichtig?
