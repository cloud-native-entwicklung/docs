---
layout: default
title: Problem Details
parent: REST-API
grand_parent: Übungen
nav_order: 2
has_toc: false
---

# Fehlerantworten mit Problem Details standardisieren

Unsere API liefert bei Fehlern bisher unstrukturierte oder inkonsistente Antworten. Clients müssen für jeden Endpunkt individuell erraten, wie ein Fehler aussieht. Wir führen das standardisierte Format **Problem Details for HTTP APIs (RFC 9457)** ein, damit alle Fehlerantworten einheitlich aufgebaut sind.

## 🎯 Lernziele

* Du kennst den Aufbau des Problem-Details-Formats nach RFC 9457 und verstehst die Rolle der einzelnen Felder (`type`, `title`, `status`, `detail`, `instance`).
* Du kannst ein wiederverwendbares Schema (`ProblemDetails`) in einer separaten Datei definieren und per `$ref` referenzieren.
* Du verstehst, warum der Media Type `application/problem+json` verwendet wird und wie er sich von `application/json` unterscheidet.
* Du kannst eine Default-Error-Response als wiederverwendbare Komponente definieren und auf mehrere Endpunkte anwenden.

## ✅ Definition of Done

* [ ] Es existiert eine separate Datei `problem-details.yml` mit dem `ProblemDetails`-Schema (Pflichtfelder: `type`, `title`, `status`; optionale Felder: `detail`, `instance`).
* [ ] Alle Fehler-Responses (400, 404) verwenden den Content-Type `application/problem+json` und referenzieren das `ProblemDetails`-Schema.
* [ ] Es gibt eine wiederverwendbare `DefaultErrorResponse`-Komponente, die in mehreren Endpunkten eingesetzt wird.
* [ ] Die Spezifikation ist valide und kann fehlerfrei gerendert werden.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle die Datei `problem-details.yml` mit dem `ProblemDetails`-Schema gemäß RFC 9457.
2. Definiere eine wiederverwendbare `DefaultErrorResponse`-Komponente, die das Schema mit dem Media Type `application/problem+json` nutzt.
3. Ersetze alle bestehenden Fehler-Responses in der Spezifikation durch Referenzen auf das neue Schema bzw. die Default-Response.

## 🤔 Reflexionsfragen

* Warum ist es problematisch, wenn verschiedene Endpunkte einer API unterschiedliche Fehlerformate zurückgeben? Wie wirkt sich das auf die Client-Entwicklung aus?
* Was ist der Unterschied zwischen `type` und `detail` im Problem-Details-Format? Warum reicht `detail` allein nicht aus?
* Warum definiert RFC 9457 einen eigenen Media Type (`application/problem+json`) statt einfach `application/json` zu verwenden? Welchen Vorteil hat das für den Client?
* Wann ist es sinnvoll, Schemas in separate Dateien auszulagern? Welche Vor- und Nachteile hat diese Modularisierung?
* Wie hilft eine wiederverwendbare `DefaultErrorResponse`-Komponente dabei, die Konsistenz der API-Spezifikation sicherzustellen? Was passiert, wenn Du stattdessen die Fehlerdefinition in jedem Endpunkt einzeln pflegst?
