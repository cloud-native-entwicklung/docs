---
layout: default
title: Lastenheft
nav_order: 1
---

# Lastenheft: Rezepte-App

## Projektbeschreibung

Es soll eine webbasierte Anwendung zur Verwaltung von Rezepten entwickelt werden. Die Anwendung besteht aus einem **Browser-Frontend** und einem **Backend mit Datenbank**. Benutzer sollen Rezepte erstellen, anzeigen, bearbeiten und löschen können.

## Datenmodell

### Rezept

| Feld | Beschreibung | Pflicht |
|------|-------------|---------|
| Name | Bezeichnung des Rezepts (max. 100 Zeichen) | ja |
| Bild-URL | URL zu einem Rezeptbild (absolut oder relativ) | nein |
| Portionen | Anzahl der Portionen (mindestens 1) | ja |
| Zubereitungszeit | Dauer in Minuten (mindestens 1) | ja |
| Schwierigkeitsgrad | `easy`, `medium` oder `hard` (Standard: `medium`) | ja |
| Zutaten | Liste der Zutaten (max. 100 Einträge) | ja |
| Zubereitung | Freitext-Beschreibung der Zubereitung (max. 2000 Zeichen) | ja |

### Zutat

| Feld | Beschreibung | Pflicht |
|------|-------------|---------|
| Name | Bezeichnung der Zutat (max. 100 Zeichen) | ja |
| Menge | Numerischer Wert, muss positiv sein | ja |
| Einheit | z.B. `pieces`, `grams`, `kilograms`, `milliliters`, `liters`, `teaspoons`, `tablespoons`, `cups` u.a. | ja |

Das System vergibt automatisch eine **eindeutige ID** und einen **Zeitstempel der letzten Bearbeitung** pro Rezept. Beide Felder sind nicht durch den Benutzer änderbar.

## Funktionale Anforderungen

### CRUD-Operationen

| Operation | Beschreibung |
|-----------|-------------|
| **Erstellen** | Ein neues Rezept mit allen Pflichtfeldern anlegen. |
| **Alle anzeigen** | Alle vorhandenen Rezepte als Liste abrufen. |
| **Einzeln anzeigen** | Ein einzelnes Rezept anhand seiner ID abrufen. |
| **Bearbeiten** | Ein bestehendes Rezept vollständig aktualisieren. |
| **Löschen** | Ein Rezept anhand seiner ID löschen. |

### Validierung

- Pflichtfelder müssen beim Erstellen und Bearbeiten angegeben werden.
- Ungültige Eingaben (z.B. fehlende Felder, negative Mengenangaben) werden mit einer Fehlermeldung abgelehnt.

## Technische Rahmenbedingungen

| Aspekt | Vorgabe |
|--------|---------|
| **Frontend** | Single-Page-Application im Browser (Angular) |
| **Backend** | REST-API (Quarkus / Java) |
| **Datenbank** | Relationale Datenbank (H2 für Entwicklung) |
| **Schnittstelle** | JSON über HTTP, dokumentiert als OpenAPI-Spezifikation |

## Frontend-Ansichten

| Ansicht | Beschreibung |
|---------|-------------|
| **Rezeptliste** | Alle Rezepte als Kacheln/Karten mit Bild, Name, Schwierigkeit, Portionen und Dauer. Per Klick zur Detailansicht. |
| **Detailansicht** | Vollständige Anzeige eines Rezepts mit allen Feldern, Zutaten und Zubereitung. Aktionen: Bearbeiten, Löschen. |
| **Formular** | Eingabemaske zum Erstellen und Bearbeiten eines Rezepts. Dynamisches Hinzufügen/Entfernen von Zutaten. |
