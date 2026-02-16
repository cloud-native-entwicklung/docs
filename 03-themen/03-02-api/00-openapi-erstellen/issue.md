---
layout: default
title: OpenAPI-Spezifikation erstellen
---

# Eine REST-API mit OpenAPI spezifizieren

Bevor wir eine API implementieren, beschreiben wir sie zunächst formal. Die OpenAPI-Spezifikation (ehemals Swagger) ist der De-facto-Standard, um REST-APIs maschinenlesbar und menschenverständlich zu dokumentieren. In dieser Übung erstellst Du eine vollständige OpenAPI-Spezifikation für eine Rezepteverwaltung.

## 🎯 Lernziele

* Du verstehst den Aufbau einer OpenAPI-Spezifikation (Version 3.1) und die Bedeutung der zentralen Abschnitte (`info`, `paths`, `components`).
* Du kannst CRUD-Endpunkte (`GET`, `POST`, `PUT`, `DELETE`) für eine Ressource in OpenAPI definieren und sinnvolle HTTP-Statuscodes zuordnen.
* Du kannst Schemas für Datenmodelle (Objekte, Enums, Arrays) unter `components/schemas` definieren und per `$ref` referenzieren.
* Du kannst wiederverwendbare Parameter unter `components/parameters` auslagern.
* Du kannst die Spezifikation in einem Editor wie dem [Swagger Editor](https://editor.swagger.io/) oder der [Swagger UI](https://swagger.io/tools/swagger-ui/) validieren und visualisieren.

## ✅ Definition of Done

* [ ] Es existiert eine Datei `openapi.yml` im Repository.
* [ ] Die Spezifikation beschreibt die Endpunkte `GET /recipes`, `POST /recipes`, `GET /recipes/{id}`, `PUT /recipes/{id}` und `DELETE /recipes/{id}`.
* [ ] Es gibt Schemas für `Recipe`, `Ingredient`, `Difficulty` (Enum) und `IngredientUnit` (Enum) unter `components/schemas`.
* [ ] Der Pfadparameter `id` ist als wiederverwendbare Komponente unter `components/parameters` definiert.
* [ ] Für jeden Endpunkt sind sinnvolle HTTP-Statuscodes mit Beschreibungen spezifiziert (z.B. 200, 201, 204, 400, 404).
* [ ] Die Spezifikation ist valide und kann im Swagger Editor fehlerfrei gerendert werden.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Mache Dich mit dem Aufbau einer OpenAPI-Spezifikation vertraut. Die offizielle Dokumentation findest Du unter [OpenAPI Specification 3.1](https://spec.openapis.org/oas/v3.1.0). Ein guter Einstieg ist auch das [Swagger Getting Started Guide](https://swagger.io/docs/specification/v3_0/about/).
2. Erstelle die Datei `openapi.yml` und definiere die grundlegende Struktur (`openapi`, `info`, `servers`, `paths`, `components`).
3. Modelliere die Schemas für `Recipe`, `Ingredient`, `Difficulty` und `IngredientUnit` mit passenden Datentypen, Constraints (`minLength`, `maxLength`, `minimum`, `pattern`) und Beschreibungen.
4. Definiere die fünf CRUD-Endpunkte mit Request-Bodies, Responses und Statuscodes. Verwende `$ref`, um Schemas und Parameter wiederzuverwenden.
5. Validiere die Spezifikation im [Swagger Editor](https://editor.swagger.io/).

## 📚 Selbstlernmaterial

* [OpenAPI Specification 3.0](https://spec.openapis.org/oas/v3.0.4.html) — Offizielle Spezifikation (3.0)
* [OpenAPI Specification 3.1](https://spec.openapis.org/oas/v3.1.1.html) — Offizielle Spezifikation (3.1)
* [Swagger Editor](https://editor.swagger.io/) — Online-Editor für OpenAPI-Definitionen
* [Zalando RESTful API Guidelines](https://opensource.zalando.com/restful-api-guidelines/) — Best Practices für REST-APIs
* [OpenAPI Guide: Getting Started](https://learn.openapis.org/) — Einstieg in die OpenAPI-Spezifikation

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen einer "Code-first"- und einer "API-first"-Strategie? Welche Vorteile hat es, die Spezifikation vor der Implementierung zu schreiben?
* Warum verwendet man `$ref` statt die Schemas direkt in den Endpunkten zu definieren? Was passiert, wenn sich ein Schema ändert?
* Warum liefert `POST /recipes` den Statuscode `201 Created` und nicht `200 OK`? Warum liefert `DELETE /recipes/{id}` den Statuscode `204 No Content`?
* Was bedeutet `readOnly: true` bei einem Feld (z.B. `id`, `lastEdited`)? Wie wirkt sich das auf Request- und Response-Bodies aus?
* Welche Rolle spielen die `servers`-Einträge in der Spezifikation? Warum können dort mehrere URLs stehen?
