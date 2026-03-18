---
layout: default
title: Service-Schicht einführen
---

# Service-Schicht einführen

Bisher liegt die gesamte Geschäftslogik direkt in der REST-Ressource. Das erschwert Wiederverwendung und Testbarkeit. Wir extrahieren die Logik in einen eigenen Service und nutzen CDI (Contexts and Dependency Injection) für die Verdrahtung.

## 🎯 Lernziele

* Du verstehst das Prinzip der Schichtentrennung (Separation of Concerns) und warum die Ressource keine Geschäftslogik enthalten sollte.
* Du kannst CDI-Beans mit `@ApplicationScoped` erstellen und per Constructor Injection verwenden.
* Du kannst mit Mockito Abhängigkeiten in Tests durch Mocks ersetzen und so Schichten isoliert testen.

## ✅ Definition of Done

* [ ] Die Geschäftslogik ist in einen `RecipesService` (CDI-Bean mit `@ApplicationScoped`) ausgelagert.
* [ ] Die REST-Ressource delegiert an den Service und enthält selbst keine Geschäftslogik mehr.
* [ ] Der Service wird per Constructor Injection in die Ressource injiziert.
* [ ] Es gibt mockbasierte Tests für die Ressource (Service gemockt) und separate Tests für den Service.
* [ ] Die Abhängigkeit `quarkus-junit5-mockito` ist eingebunden.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle einen `RecipesService` als `@ApplicationScoped` CDI-Bean und verschiebe die Geschäftslogik dorthin.
2. Passe die REST-Ressource an, sodass sie den Service injiziert bekommt und verwendet.
3. (Optional) Schreibe API-Tests mit gemocktem Service, wenn sinnvoll.

## 📚 Selbstlernmaterial

* [Quarkus: CDI Reference](https://quarkus.io/guides/cdi-reference) — CDI in Quarkus
* [Jakarta Contexts and Dependency Injection (CDI)](https://jakarta.ee/specifications/cdi/) — Spezifikation
* [Baeldung: CDI Introduction](https://www.baeldung.com/java-ee-cdi) — Einführung in CDI
* [Baeldung: Dependency Injection](https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring) — Konzept der Dependency Injection

## 🤔 Reflexionsfragen

* Warum sollte die REST-Ressource keine Geschäftslogik enthalten? Was wäre das Problem, wenn ein zweiter Zugangskanal (z.B. gRPC, Messaging) hinzukommt?
* Was ist der Unterschied zwischen `@ApplicationScoped` und `@RequestScoped`? Wann würdest Du welches Scope verwenden?
* Welchen Mehrwert bieten API-Tests mit gemocktem Service gegenüber den bisherigen Blackbox-Tests?
* Wo sollte die Validierung des Rezeptes stattfinden -- in der Resource, im Service oder in beiden?
