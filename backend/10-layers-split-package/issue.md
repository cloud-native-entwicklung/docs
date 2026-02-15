---
layout: default
title: Schichtenarchitektur aufteilen
---

# Pakete nach Schichtenarchitektur aufteilen

Bisher liegen alle Klassen im selben Paket. Mit zunehmender Projektgröße wird das unübersichtlich. Wir strukturieren den Code nach dem Schichtenmodell in eigene Pakete.

## 🎯 Lernziele

* Du verstehst das Prinzip der Schichtenarchitektur und kannst es auf die Paketstruktur eines Java-Projekts anwenden.
* Du kannst die Begriffe Boundary, Domain und Persistence (Infrastruktur) voneinander abgrenzen.
* Du erkennst, warum eine klare Paketstruktur die Wartbarkeit und Verständlichkeit eines Projekts verbessert.

## ✅ Definition of Done

* [ ] Die Klassen sind in folgende Pakete aufgeteilt: `boundary/` (Resource, Jackson-Konfiguration), `domain/` (Service, DAO-Interface, Modellklassen), `persistence/hibernate/`, `persistence/inmemory/`, `shared/validation/`.
* [ ] Alle Imports und Referenzen sind aktualisiert.
* [ ] Testklassen sind entsprechend umbenannt und zugeordnet.
* [ ] Alle Tests laufen weiterhin erfolgreich.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle die Paketstruktur (`boundary`, `domain`, `domain/model`, `persistence/hibernate`, `persistence/inmemory`, `shared/validation`).
2. Verschiebe die Klassen in die jeweils passenden Pakete.
3. Benenne Testklassen bei Bedarf um und stelle sicher, dass alle Tests grün sind.

## 🤔 Reflexionsfragen

* Warum gehört das DAO-Interface in das `domain`-Paket und nicht in `persistence`? Was hat das mit der Abhängigkeitsrichtung zu tun?
* Welche Abhängigkeitsregeln gelten zwischen den Schichten? Darf `domain` von `boundary` abhängen?
* Was unterscheidet die Begriffe "Boundary", "Domain" und "Persistence" in diesem Kontext? Wie würdest Du sie jemandem erklären, der das Projekt nicht kennt?
* Welche Vorteile hätte eine Aufteilung in Maven-Module statt in Pakete? Wann lohnt sich dieser zusätzliche Aufwand?
