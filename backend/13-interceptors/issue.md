---
layout: default
title: Interceptors
parent: Backend
grand_parent: Trainerleitfaden
nav_order: 13
has_toc: false
---

# Querschnittslogik mit CDI Interceptors

In der vorherigen Übung haben wir Events manuell im Service-Code gefeuert. Das Performance-Logging müsste ebenfalls manuell in jede Methode eingefügt werden. Solche Querschnittsbelange lassen sich mit CDI Interceptors deklarativ lösen -- eine Annotation an der Methode reicht.

## 🎯 Lernziele

* Du verstehst das Konzept der Aspektorientierten Programmierung (AOP) und wie Interceptors Querschnittsbelange von der Geschäftslogik trennen.
* Du kannst ein Interceptor Binding (Annotation) und einen zugehörigen Interceptor implementieren.
* Du kannst mit dem `InvocationContext` auf Methoden-Metadaten und Parameter zugreifen.
* Du erkennst, wann Interceptors sinnvoll sind und wann sie die Nachvollziehbarkeit des Codes erschweren.

## ✅ Definition of Done

* [ ] Es existiert ein `@LogPerformance`-Interceptor-Binding mit zugehörigem Interceptor, der die Ausführungsdauer von Methoden misst und loggt.
* [ ] Es existiert ein `@FireEvent`-Interceptor-Binding mit zugehörigem Interceptor, der Events reflektiv erzeugt und feuert.
* [ ] Der Service verwendet `@LogPerformance` und `@FireEvent` statt manuellem Code.
* [ ] Der manuelle Event-Feuer-Code ist aus dem Service entfernt.
* [ ] Alle Tests laufen weiterhin erfolgreich.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle das `@LogPerformance`-Interceptor-Binding und den zugehörigen Interceptor, der die Methodendauer misst.
2. Erstelle das `@FireEvent`-Interceptor-Binding und den zugehörigen Interceptor, der Events reflektiv erzeugt und über CDI feuert.
3. Annotiere die Service-Methoden mit den neuen Bindings und entferne den manuellen Code.
4. Stelle sicher, dass alle Tests weiterhin grün sind.

## 🤔 Reflexionsfragen

* Was sind die Vor- und Nachteile von Interceptors gegenüber explizitem Code? Wann wird die "Magie" hinter Annotationen zum Problem?
* Warum muss ein Interceptor-Binding eine eigene Annotation sein und kann nicht einfach eine Klasse referenzieren?
* Der `@FireEvent`-Interceptor nutzt Reflection, um Events zu erzeugen. Welche Risiken bringt das mit sich (z.B. Typsicherheit, Refactoring)?
* Wie unterscheiden sich CDI Interceptors von Servlet-Filtern oder JAX-RS-Filtern? Auf welcher Ebene greifen sie jeweils ein?
* In welcher Reihenfolge werden mehrere Interceptors an derselben Methode ausgeführt? Wie kann man die Reihenfolge beeinflussen?
