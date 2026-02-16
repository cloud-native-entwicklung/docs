---
layout: default
title: HAL Hypermedia
---

# HAL-Format für Hypermedia-getriebene Responses einführen

Unsere API liefert bisher reines JSON ohne Hinweise darauf, welche Aktionen oder Navigationsschritte dem Client als nächstes zur Verfügung stehen. Wir führen **HAL (Hypertext Application Language)** ein, damit Responses maschinenlesbare Links enthalten und Clients die API dynamisch erkunden können, ohne Endpunkt-URLs hart zu codieren.

## 🎯 Lernziele

* Du verstehst das Konzept von Hypermedia as the Engine of Application State (HATEOAS) und kannst erklären, warum Links in API-Responses sinnvoll sind.
* Du kannst die HAL-Bausteine (`_links`, `_embedded`, `HalLink`, `HalResource`) in OpenAPI modellieren.
* Du verstehst, wann `application/hal+json` statt `application/json` als Media Type eingesetzt wird.
* Du kannst ein bestehendes Pagination-Modell (mit `nextCursor`) zu einer link-basierten Navigation (HAL `next`-Link) umbauen.
* Du kannst `allOf` verwenden, um bestehende Schemas um HAL-Felder zu erweitern, ohne sie zu duplizieren.

## ✅ Definition of Done

* [ ] Es existiert eine separate Datei `hal.yml` mit den Schemas `HalLink` und `HalResource`.
* [ ] Alle Response-Media-Types sind von `application/json` auf `application/hal+json` umgestellt.
* [ ] `Recipe` erweitert `HalResource` per `allOf` und enthält damit ein `_links`-Objekt.
* [ ] `RecipePage` verwendet `_embedded.recipes` für die Rezeptliste und `_links` (mit `self` und optional `next`) für die Navigation.
* [ ] Das bisherige `nextCursor`-Feld in `RecipePage` ist durch den HAL-`next`-Link ersetzt.
* [ ] Die Spezifikation ist valide und kann fehlerfrei gerendert werden.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle die Datei `hal.yml` mit den Basis-Schemas `HalLink` (mit `href`) und `HalResource` (mit `_links`).
2. Erweitere `Recipe` per `allOf` um `HalResource`, sodass jedes Rezept ein `_links`-Objekt mitbringt.
3. Baue `RecipePage` um: Verwende `_embedded.recipes` für die Daten und `_links` (`self`, `next`) für die Pagination anstelle von `nextCursor`.
4. Stelle alle Response-Media-Types auf `application/hal+json` um.

## 📚 Selbstlernmaterial

* [HAL — Hypertext Application Language (Draft)](https://datatracker.ietf.org/doc/html/draft-kelly-json-hal) — HAL-Spezifikation
* [Zalando Guidelines: Hypermedia](https://opensource.zalando.com/restful-api-guidelines/#hypermedia) — Hypermedia-Patterns
* [OpenAPI Specification 3.1](https://spec.openapis.org/oas/v3.1.1.html) — Offizielle Spezifikation

## 🤔 Reflexionsfragen

* Was bedeutet HATEOAS und warum wird es oft als höchste Reifestufe einer REST-API bezeichnet (Richardson Maturity Model, Level 3)?
* Welchen konkreten Vorteil hat ein Client davon, dass er die URL der nächsten Seite aus einem `next`-Link liest, anstatt sie selbst aus einem Cursor-Wert zusammenzubauen?
* Warum werden eingebettete Ressourcen in HAL unter `_embedded` platziert und nicht direkt auf oberster Ebene? Welches Problem wird dadurch vermieden?
* Wie verändert sich die Kopplung zwischen Client und Server, wenn der Client URLs aus Links entnimmt statt sie hart zu codieren? Was passiert, wenn sich die URL-Struktur der API ändert?
* Welche Nachteile oder Herausforderungen bringt HAL mit sich? Denke dabei an Tooling-Unterstützung, Payload-Größe und Lernkurve für Client-Entwickler.
