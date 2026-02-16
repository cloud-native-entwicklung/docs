---
layout: default
title: Datenbank-Best-Practices
---

# JPA Best Practices anwenden

Die bisherige JPA-Konfiguration funktioniert, nutzt aber einige Standardeinstellungen, die in der Praxis zu Problemen führen können. Wir verbessern das Mapping mit AttributeConverters und konfigurieren die Fetch-Strategie.

## 🎯 Lernziele

* Du verstehst, warum `@Enumerated(EnumType.STRING)` fragil ist und wie `AttributeConverter` eine robustere Alternative bietet.
* Du kannst eigene JPA `AttributeConverter` implementieren und am Entity einsetzen.
* Du verstehst den Unterschied zwischen `FetchType.LAZY` und `FetchType.EAGER` und die damit verbundenen Probleme (N+1-Queries, LazyInitializationException).

## ✅ Definition of Done

* [ ] Für `Difficulty` und `IngredientUnit` existieren jeweils eigene `AttributeConverter`-Klassen.
* [ ] Die Enum-Mappings verwenden nicht mehr `@Enumerated`, sondern die neuen Converter.
* [ ] Die `ingredients`-Beziehung ist explizit mit `FetchType.EAGER` konfiguriert.
* [ ] Alle Tests laufen weiterhin erfolgreich.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle `AttributeConverter`-Implementierungen für `Difficulty` und `IngredientUnit`.
2. Ersetze `@Enumerated` durch `@Convert` mit den neuen Convertern.
3. Setze `FetchType.EAGER` an der `@OneToMany`-Beziehung und prüfe, ob die Tests weiterhin grün sind.

## 📚 Selbstlernmaterial

* [Quarkus: Hibernate ORM Guide](https://quarkus.io/guides/hibernate-orm) — Datenbankanbindung mit Hibernate
* [Baeldung: JPA Entity Lifecycle](https://www.baeldung.com/jpa-entity-lifecycle-events) — Entity Lifecycle
* [Baeldung: JPA Cascade Types](https://www.baeldung.com/jpa-cascade-types) — Kaskadierung verstehen
* [Vlad Mihalcea: Best JPA Practices](https://vladmihalcea.com/tutorials/hibernate/) — Hibernate Best Practices

## 🤔 Reflexionsfragen

* Was passiert mit bestehenden Daten in der Datenbank, wenn Du eine Enum-Konstante umbenennst und `@Enumerated(STRING)` verwendest? Wie löst ein `AttributeConverter` dieses Problem?
* Warum ist `@Enumerated(ORDINAL)` noch problematischer als `@Enumerated(STRING)`?
* In welchen Szenarien ist `FetchType.LAZY` die bessere Wahl? Warum verwenden wir hier trotzdem `EAGER`?
* Was ist das N+1-Query-Problem und wie hängt es mit der Fetch-Strategie zusammen?
