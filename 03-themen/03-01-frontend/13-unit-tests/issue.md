---
layout: default
title: Unit-Tests mit Spectator
---

# Umfassende Unit-Tests mit Spectator schreiben

Nach der Migration auf Jest wollen wir unsere Anwendung mit aussagekräftigen Tests absichern. Dazu verwenden wir die Bibliothek Spectator, die das Testen von Angular-Komponenten und Services deutlich vereinfacht.

## 🎯 Lernziele

* Du kannst Spectator verwenden, um Angular-Komponenten, Services und Pipes zu testen.
* Du verstehst, wie man Services mit `createRecipeServiceMock()` oder `SpyObject` mockt.
* Du kannst den `HttpClientTestingModule` einsetzen, um HTTP-Aufrufe in Tests zu simulieren.
* Du verstehst die Unterschiede zwischen isolierten Tests und Integrationstests im Angular-Kontext.

## ✅ Definition of Done

* [ ] `@ngneat/spectator` ist als Abhängigkeit installiert.
* [ ] Tests existieren für: AppComponent, RecipeDetailComponent, RecipeFormComponent, RecipeListItemComponent, RecipeListComponent.
* [ ] Der `RecipeService` ist mit `HttpClientTestingModule` getestet.
* [ ] Eine `createRecipeServiceMock()`-Factory-Funktion ist erstellt und wird in Komponenten-Tests verwendet.
* [ ] Ein Test-Path-Alias `@app/test` ist eingerichtet.
* [ ] Utility-Funktionen (z.B. `isDefined`) sind mit eigenen Tests abgedeckt.
* [ ] Alle Tests laufen erfolgreich.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Installiere Spectator und richte den Test-Path-Alias ein.
2. Erstelle eine Mock-Factory für den `RecipeService` und schreibe Tests für die Komponenten.
3. Teste den Service mit `HttpClientTestingModule` und ergänze Tests für Utility-Funktionen.

## 📚 Selbstlernmaterial

* [Spectator Dokumentation](https://ngneat.github.io/spectator/) — Spectator für Angular-Tests
* [Angular: Component Testing](https://angular.dev/guide/testing/components-scenarios) — Komponenten testen
* [Jest Dokumentation](https://jestjs.io/docs/getting-started) — Jest-Referenz

## 🤔 Reflexionsfragen

* Welche Vorteile bietet Spectator gegenüber dem direkten Arbeiten mit `TestBed`? In welchen Fällen würdest Du trotzdem `TestBed` direkt verwenden?
* Warum mocken wir den `RecipeService` in den Komponenten-Tests, statt den echten Service zu verwenden? Welche Art von Fehlern könnten uns dadurch entgehen?
* Was ist der Unterschied zwischen `createComponentFactory` und `createHostFactory` in Spectator? Wann brauchst Du welchen Ansatz?
* Wie stellt `HttpClientTestingModule` sicher, dass keine echten HTTP-Anfragen gesendet werden? Warum ist das für Tests wichtig?
