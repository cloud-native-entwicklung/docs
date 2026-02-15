---
layout: default
title: Spectator mit Vitest (Alternative)
parent: Frontend
grand_parent: Übungen
nav_order: 15
has_toc: false
---

# Alternative: Spectator mit Vitest für Komponententests integrieren

Aufbauend auf der Vitest-Migration wollen wir die Test-Ergonomie mit Spectator verbessern. Spectator bietet eine eigene Vitest-Variante, die die gleiche komfortable API bereitstellt, aber auf Vitest statt auf Jest/Jasmine aufsetzt.

## 🎯 Lernziele

* Du kannst Spectator in der Vitest-Variante einrichten und verwenden.
* Du verstehst den Unterschied zwischen den verschiedenen Spectator-Varianten (Jasmine, Jest, Vitest).
* Du kannst eine `vitest.config.ts` für Angular-Projekte erstellen und konfigurieren.
* Du kannst Test-Fixtures und Factory-Funktionen für wiederverwendbare Testdaten erstellen.

## ✅ Definition of Done

* [ ] `@ngneat/spectator` ist mit der Vitest-Variante installiert und konfiguriert.
* [ ] Eine `vitest.config.ts` ist erstellt und eingerichtet.
* [ ] Alle Test-Dateien verwenden Spectator mit Vitest-Imports.
* [ ] Dummy-Daten sind als Test-Fixtures für die Specs wiedereingeführt.
* [ ] Mapping-Utilities und Formular-Model-Factories sind mit Tests abgedeckt.
* [ ] Alle Tests laufen erfolgreich.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Installiere Spectator und erstelle eine `vitest.config.ts` mit den nötigen Angular-spezifischen Einstellungen.
2. Schreibe die Tests auf Spectator/Vitest um und richte Test-Fixtures mit Dummy-Daten ein.
3. Ergänze Tests für Mapping-Utilities und Formular-Model-Factories.

## 🤔 Reflexionsfragen

* Warum gibt es verschiedene Varianten von Spectator (Jasmine, Jest, Vitest)? Was unterscheidet sie technisch?
* Warum führen wir Dummy-Daten als Test-Fixtures wieder ein, obwohl wir sie zuvor aus der Anwendung entfernt haben? Was ist der Unterschied zwischen Testdaten und Produktionsdaten?
* Welchen Vorteil bieten Factory-Funktionen für Testdaten gegenüber statischen Objekten? Wann lohnt sich der Mehraufwand?
* Wie würdest Du die Entscheidung zwischen Jest+Spectator und Vitest+Spectator in einem realen Projekt treffen? Welche Kriterien wären ausschlaggebend?
