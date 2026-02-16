---
layout: default
title: HTTP-Zugriff auf das Backend
---

# Rezeptdaten per HTTP vom Backend laden

Unsere App soll die Rezeptdaten nicht mehr aus Dummy-Daten beziehen, sondern von einem echten REST-Backend laden. Dazu verwenden wir Angulars `HttpClient` und führen ein DTO-Modell ein, um die Backend-Datenstrukturen sauber von unserem Domänenmodell zu trennen.

## 🎯 Lernziele

* Du kannst den `HttpClient` in Angular konfigurieren (`provideHttpClient()`) und für GET-Anfragen verwenden.
* Du verstehst das Konzept von DTOs (Data Transfer Objects) und kannst Mapping-Funktionen zwischen DTO- und Domänenmodell implementieren.
* Du kannst Observables mit `toSignal()` in Signals umwandeln, um sie im Template zu verwenden.
* Du verstehst den Unterschied zwischen synchronen Dummy-Daten und asynchronen HTTP-Anfragen.

## ✅ Definition of Done

* [ ] `provideHttpClient()` ist in der Anwendungskonfiguration registriert.
* [ ] Der `RecipeService` verwendet `HttpClient.get<RecipeDto[]>()` und gibt ein `Observable<Recipe[]>` zurück.
* [ ] DTO-Modelle existieren und Mapping-Funktionen wandeln DTOs in Domänenobjekte um.
* [ ] Die Dummy-Daten sind entfernt.
* [ ] Die Komponente verwendet `toSignal()`, um das Observable als Signal zu konsumieren.
* [ ] Die Anwendung zeigt die Rezepte vom Backend an.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Registriere `provideHttpClient()` in `app.config.ts`.
2. Erstelle DTO-Interfaces und Mapping-Funktionen (DTO zu Domänenmodell).
3. Ersetze im Service die Dummy-Daten durch einen `HttpClient.get()`-Aufruf mit anschließendem Mapping.
4. Verwende in der Komponente `toSignal()`, um das Observable in ein Signal umzuwandeln.

## 📚 Selbstlernmaterial

* [Angular: HttpClient](https://angular.dev/guide/http) — Offizielles HTTP-Guide
* [Angular: Making HTTP Requests](https://angular.dev/guide/http/making-requests) — HTTP-Requests im Detail
* [RxJS: Observables](https://rxjs.dev/guide/observable) — Einführung in Observables

## 🤔 Reflexionsfragen

* Warum führen wir separate DTO-Interfaces ein, statt die Backend-Datenstruktur direkt als Domänenmodell zu verwenden? Was passiert, wenn sich die Backend-API ändert?
* Was ist der Unterschied zwischen einem Observable und einem Signal? Warum verwenden wir `toSignal()` als Brücke?
* Was passiert, wenn der HTTP-Aufruf fehlschlägt? Wie könntest Du mit Fehlern umgehen?
* Warum ist `provideHttpClient()` eine Funktion und kein Modul-Import? Welches Architekturkonzept steckt dahinter?
