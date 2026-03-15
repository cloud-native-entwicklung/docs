---
layout: default
title: Übungsblatt
---

# Rezepte-API implementieren

Wir bauen eine Rezepteverwaltung als Backend-Service. Der erste Schritt ist eine REST-API, über die Rezepte angelegt und abgerufen werden können. Als Datenspeicher verwenden wir zunächst eine einfache In-Memory-Lösung.

## 🎯 Lernziele

* Du verstehst, wie JAX-RS-Ressourcen in Quarkus aufgebaut sind und wie HTTP-Methoden auf Java-Methoden gemappt werden.
* Du kannst ein Domänenmodell mit verschachtelten Objekten (Rezept, Zutat) und Enums entwerfen.
* Du kannst REST Assured verwenden, um automatisierte Integrationstests für Deine API zu schreiben.
* Du verstehst den Unterschied zwischen verschiedenen HTTP-Statuscodes (200, 201, 404) und setzt sie korrekt ein.

## ✅ Definition of Done

* [ ] Es gibt eine REST-Ressource, die die API nach Spezifikation implementiert.
* [ ] Es existieren REST-Assured-Tests für alle Endpunkte.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Implementiere nach TDD-Ansatz für je eine Anforderungen an die API erst einen Test, und danach implementiere die Anforderung in einer JAX-RS-Ressource.
2. Verwende in der JAX-RS-Ressource eine `ConcurrentHashMap`, um Rezepte In-Memory zu speichern.

## 📚 Selbstlernmaterial

* [Quarkus: Writing REST Services](https://quarkus.io/guides/rest) — Quarkus REST Guide
* [Jakarta RESTful Web Services (JAX-RS)](https://jakarta.ee/specifications/restful-ws/) — Jakarta EE Spezifikation
* [Baeldung: Introduction to JAX-RS](https://www.baeldung.com/jax-rs-spec-and-implementations) — Tutorial zu JAX-RS
* [Quarkus: REST JSON Serialisation](https://quarkus.io/guides/rest#json-serialisation) — JSON-Serialisierung mit Jackson

## 🤔 Reflexionsfragen

* Warum verwenden wir eine `ConcurrentHashMap` und nicht eine einfache `HashMap`? In welchen Situationen würde eine `HashMap` zu Problemen führen?
* Warum testen wir mit REST Assured über HTTP und nicht direkt die Java-Methoden? Welche Fehler finden wir so, die ein Unit-Test nicht finden würde?
* Welche Nachteile hat die In-Memory-Speicherung?
