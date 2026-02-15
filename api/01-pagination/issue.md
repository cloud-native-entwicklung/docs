---
layout: default
title: Pagination
parent: REST-API
grand_parent: Übungen
nav_order: 1
has_toc: false
---

# Cursor-basierte Pagination für Rezepte

Die Rezeptsammlung wächst stetig. Aktuell liefert `GET /recipes` alle Rezepte als einfaches JSON-Array zurück. Bei hunderten oder tausenden Einträgen ist das weder performant noch benutzerfreundlich. Wir erweitern die OpenAPI-Spezifikation um eine Cursor-basierte Pagination.

## 🎯 Lernziele

* Du verstehst den Unterschied zwischen Offset-basierter und Cursor-basierter Pagination und kannst erklären, wann welcher Ansatz sinnvoll ist.
* Du kannst Query-Parameter (`cursor`, `limit`) in einer OpenAPI-Spezifikation definieren und mit sinnvollen Constraints versehen (Datentyp, Wertebereich, Defaultwert).
* Du kannst ein Pagination-Response-Schema (`RecipePage`) entwerfen, das Nutzdaten und Navigations-Metadaten sauber trennt.
* Du weißt, wie fehlerhafte Client-Anfragen (z.B. ungültiger `limit`-Wert) über den HTTP-Statuscode 400 kommuniziert werden.

## ✅ Definition of Done

* [ ] `GET /recipes` akzeptiert die optionalen Query-Parameter `cursor` (string) und `limit` (integer, 1–100, Default 20).
* [ ] Die Response liefert ein `RecipePage`-Objekt mit `data` (Array von `Recipe`) und `nextCursor` (string, optional) zurück.
* [ ] Bei ungültigen Query-Parametern wird ein 400-Fehler spezifiziert.
* [ ] Die Spezifikation ist valide und kann fehlerfrei gerendert werden.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erweitere den `GET /recipes`-Endpunkt um die Query-Parameter `cursor` und `limit` mit passenden Typen, Constraints und Beschreibungen.
2. Erstelle das Schema `RecipePage` mit den Feldern `data` und `nextCursor` und verwende es als Response-Body.
3. Definiere eine 400-Response für ungültige Parameter.

## 🤔 Reflexionsfragen

* Welche Probleme entstehen, wenn eine API eine große Datenmenge ohne Pagination zurückgibt? Denke dabei an Client, Server und Netzwerk.
* Was passiert bei Offset-basierter Pagination, wenn zwischen zwei Seitenabrufen neue Einträge eingefügt oder bestehende gelöscht werden? Warum ist Cursor-basierte Pagination hier robuster?
* Warum ist `nextCursor` optional? Was signalisiert das Fehlen dieses Feldes dem Client?
* Welchen Vorteil hat es, `limit` mit einem Defaultwert und einem Wertebereich zu versehen, statt ihn einfach als beliebige Zahl zuzulassen?
* Warum ist es sinnvoll, die Nutzdaten in einem `data`-Feld zu kapseln, anstatt das Array direkt zurückzugeben? Welche Erweiterungsmöglichkeiten ergeben sich daraus?
