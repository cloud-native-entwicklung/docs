---
layout: default
title: REST verstehen
---

# REST verstehen

REST (*Representational State Transfer*) ist der Architekturstil, der dem Web zugrunde liegt und auf dem moderne APIs aufbauen. In dieser Übung lernst Du die Grundprinzipien von REST kennen und erkundest eine reale REST-API.

## 🎯 Lernziele

* Du verstehst die Grundprinzipien von REST (Ressourcen, einheitliche Schnittstelle, Zustandslosigkeit).
* Du kennst die wichtigsten HTTP-Methoden (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`) und weißt, wann welche eingesetzt wird.
* Du kennst die wichtigsten HTTP-Statuscodes und kannst sie einer REST-Antwort zuordnen.
* Du kannst eine reale REST-API anhand ihrer Dokumentation erkunden und verstehen.

## ✅ Definition of Done

* [ ] Du hast die Fruit Shop API im Swagger UI erkundet und mindestens einen Request direkt ausprobiert.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Lies die [Zalando RESTful API Guidelines](https://opensource.zalando.com/restful-api-guidelines/) — insbesondere die Abschnitte zu Ressourcen, HTTP-Methoden und Statuscodes. Du musst nicht alles im Detail lesen; verschaffe Dir einen Überblick.
2. Öffne die [Fruit Shop REST-API](https://api.predic8.de/api-docs/ui/fruit-shop-api-v2-2-0) im Browser. Das ist eine echte, öffentlich zugängliche REST-API mit einer Swagger-UI-Oberfläche.
3. Erkunde die API: Welche Ressourcen gibt es? Welche Methoden stehen zur Verfügung? Probiere einige Requests direkt im Browser aus ("Try it out").
4. Entwerft die REST-API für eine Rezepteverwaltung: Haltet die Endpunkte für die grundlegenden CRUD-Operationen (Anlegen, Lesen, Aktualisieren, Löschen) formlos in einer Textdatei fest. Überlegt dabei: Welche URLs, Methoden und Statuscodes verwendet ihr?
5. Beantwortet gemeinsam die Reflexionsfragen.

## 📚 Selbstlernmaterial

* [Zalando RESTful API Guidelines](https://opensource.zalando.com/restful-api-guidelines/) — Best Practices für REST-APIs
* [Fruit Shop REST-API](https://api.predic8.de/api-docs/ui/fruit-shop-api-v2-2-0) — Beispiel einer realen REST-API zum Ausprobieren

## 🤔 Reflexionsfragen

* Welche Request-Methode(n) verwenden wir zum Anlegen einer Ressource?
* Wofür werden die folgenden Statuscodes verwendet?: 200, 201, 202, 204, 400, 404, 418?
* Wie wird das Leeren der Liste von Produkten (Produktverwaltung) in REST abgebildet?
