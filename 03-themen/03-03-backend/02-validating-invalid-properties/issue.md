---
layout: default
title: Ungültige Properties abweisen
---

# Ungültige Properties abweisen

Unsere API akzeptiert bislang jeden JSON-Body ohne Prüfung der Feldnamen. Ein Client könnte unbekannte Felder senden oder versuchen, schreibgeschützte Felder wie `id` oder `lastEdited` zu überschreiben -- beides sollte mit einem Fehler quittiert werden.

## 🎯 Lernziele

* Du verstehst, warum eine API unbekannte und schreibgeschützte Felder abweisen sollte (Prinzip der robusten API-Gestaltung).
* Du kannst die Jackson-Deserialisierung in Quarkus konfigurieren, um ungültige Properties zu erkennen.
* Du kennst die Annotation `@JsonProperty(access = READ_ONLY)` und weißt, wie Du damit Felder vor Schreibzugriffen schützt.

## ✅ Definition of Done

* [ ] Requests mit unbekannten JSON-Properties werden mit Status 400 abgelehnt.
* [ ] Die Felder `id` und `lastEdited` sind als `READ_ONLY` markiert und können nicht per POST gesetzt werden.
* [ ] Die Jackson-Konfiguration ist zentral aktiviert (z.B. über `application.properties` oder eine `JacksonConfig`-Klasse).
* [ ] Es gibt Tests, die das Verhalten bei unbekannten und schreibgeschützten Properties prüfen.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Schreibe Tests, die prüfen, dass sowohl unbekannte als auch `readonly`-Felder einen 400-Status liefern.
2. Konfiguriere Jackson so, dass unbekannte Properties beim Deserialisieren zu einem Fehler führen. Markiere `id` und `lastEdited` als schreibgeschützt.

## 📚 Selbstlernmaterial

* [Baeldung: Ignoring Unknown Properties (Jackson)](https://www.baeldung.com/jackson-deserialize-json-unknown-properties) — Unbekannte JSON-Properties behandeln

## 🤔 Reflexionsfragen

* Was könnte passieren, wenn die API unbekannte Felder stillschweigend ignoriert? Denke an Tippfehler in Feldnamen -- wie würde sich das aus Client-Sicht auswirken?
* Warum ist es wichtig, dass `id` und `lastEdited` nicht vom Client gesetzt werden können? Welche Sicherheits- oder Konsistenzprobleme könnten sonst entstehen?
* Was bewirkt die Klasse `JacksonConfig`?
