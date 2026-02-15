---
layout: default
title: Domain Events
---

# Domain Events mit CDI Events

Nach dem Anlegen eines Rezepts soll das System reagieren können -- z.B. für Logging, Benachrichtigungen oder Statistiken. Anstatt diese Logik direkt in den Service zu schreiben, nutzen wir CDI Events, um die Domäne von Querschnittsbelangen zu entkoppeln.

## 🎯 Lernziele

* Du verstehst das Konzept von Domain Events und warum sie für die Entkopplung von Geschäftslogik und Seiteneffekten sinnvoll sind.
* Du kannst CDI Events feuern (`Event<T>.fire()`) und beobachten (`@Observes`).
* Du kannst ein Event-Modell mit Interface und Records entwerfen.
* Du erkennst die Parallele zum Observer-Pattern und verstehst die Vorteile gegenüber direkter Methodenaufrufe.

## ✅ Definition of Done

* [ ] Der Service feuert nach dem Erstellen eines Rezepts ein `RecipeCreatedEvent` über CDI Events.
* [ ] Es existieren ein Interface `RecipeEvent` und ein Record `RecipeCreatedEvent`.
* [ ] Ein `RecipeEventsLogger` beobachtet das Event und protokolliert es.
* [ ] Es gibt Tests, die prüfen, dass das Event nach dem Erstellen gefeuert wird.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Definiere ein `RecipeEvent`-Interface und ein `RecipeCreatedEvent`-Record.
2. Lasse den Service ein `Event<RecipeEvent>` injizieren und nach dem Anlegen feuern.
3. Erstelle einen `RecipeEventsLogger`, der das Event mit `@Observes` empfängt und loggt.
4. Schreibe Tests, die das Feuern des Events verifizieren.

## 🤔 Reflexionsfragen

* Was ist der Vorteil von CDI Events gegenüber einem direkten Methodenaufruf vom Service zum Logger? Was ändert sich, wenn ein weiterer Observer hinzukommt?
* Werden CDI Events synchron oder asynchron verarbeitet? Was wäre der Unterschied, und wann wäre asynchrone Verarbeitung (`@ObservesAsync`) sinnvoll?
* Wie könntest Du in einem Test überprüfen, dass ein bestimmtes Event gefeuert wurde, ohne den `RecipeEventsLogger` zu verwenden?
* Welche weiteren Events wären in einer Rezepteverwaltung denkbar (z.B. `RecipeUpdatedEvent`, `RecipeDeletedEvent`)? Wie würde sich das auf das Event-Modell auswirken?
