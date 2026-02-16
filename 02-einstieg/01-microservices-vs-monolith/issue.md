---
layout: default
title: Microservices vs. Monolith
---

# Microservices vs. Monolith: Vorteile und Herausforderungen

Was unterscheidet eine Anwendung, die als ein großes Ganzes gebaut und deployed wird, von einer Architektur aus vielen kleinen, unabhängigen Services? In dieser Übung erarbeitet Ihr in Gruppen die wesentlichen Unterschiede und präsentiert Eure Ergebnisse.

## 🎯 Lernziele

* Du kannst erklären, was ein Monolith ist und wie er sich von einer Microservices-Architektur unterscheidet.
* Du verstehst die Vorteile und Herausforderungen beider Architekturansätze.
* Du kannst typische Kriterien benennen, die für oder gegen Microservices sprechen (Teamgröße, Skalierung, Deployment, Komplexität).
* Du kannst den Zusammenhang zwischen Microservices und Cloud-Native-Entwicklung herstellen.

## ✅ Definition of Done

* [ ] Ihr habt in der Gruppe eine Tabelle mit Vorteilen und Herausforderungen für Monolith und Microservices erarbeitet.
* [ ] Ihr könnt den Unterschied zwischen beiden Ansätzen in eigenen Worten erklären.
* [ ] Ihr habt Eure Ergebnisse den anderen Gruppen präsentiert (zu zweit: einer erklärt, einer zeigt).
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Macht Euch mit den beiden Architekturansätzen vertraut: **Monolith** (eine Codebasis, ein Deployment-Artefakt, eine Datenbank) vs. **Microservices** (viele kleine Services, jeweils eigenständig deploybar, eigene Datenhaltung). Überlegt, welche Anwendungen Ihr kennt und wie sie aufgebaut sein könnten.
2. Sammelt in Eurer Gruppe Vorteile und Herausforderungen beider Ansätze. Denkt dabei an Aspekte wie: Deployment, Skalierung, Teamorganisation, Fehlerausbreitung, Datenkonsistenz, Komplexität, Testbarkeit, Time-to-Market.
3. Tragt Eure Ergebnisse in eine übersichtliche Gegenüberstellung (Tabelle) ein.
4. Bereitet eine kurze Präsentation (ca. 5-10 Min.) für die anderen Gruppen vor.

## 📚 Selbstlernmaterial

* [Martin Fowler: Microservices](https://martinfowler.com/articles/microservices.html) — Der grundlegende Artikel zu Microservices
* [Microservices — Wikipedia](https://de.wikipedia.org/wiki/Microservices) — Überblick und Einordnung
* [Sam Newman: Monolith to Microservices (Auszug)](https://samnewman.io/books/monolith-to-microservices/) — Wann lohnt sich die Migration?
* [Atlassian: Microservices vs. Monolith](https://www.atlassian.com/de/microservices/microservices-architecture/microservices-vs-monolith) — Vergleich mit Diagrammen

## 🤔 Reflexionsfragen

* Warum ist ein Monolith für kleine Teams und einfache Anwendungen oft die bessere Wahl?
* Welche Probleme entstehen, wenn ein Monolith über Jahre wächst und von vielen Teams gleichzeitig weiterentwickelt wird?
* Was bedeutet "unabhängig deploybar" bei Microservices konkret? Welche Voraussetzungen müssen dafür erfüllt sein?
* Warum brauchen Microservices oft eine eigene Datenhaltung pro Service? Was passiert, wenn sich alle Services eine Datenbank teilen?
* Was hat die Teamstruktur eines Unternehmens mit der Softwarearchitektur zu tun (Stichwort: Conway's Law)?
* In unserer Schulung bauen wir ein Backend + Frontend als eine Anwendung. Warum ist das hier sinnvoll und kein Microservices-Ansatz?
