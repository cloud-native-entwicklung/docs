---
layout: default
title: Konfiguration
---

# Umgebungsspezifische Konfiguration mit Quarkus-Profilen

Nicht jede Umgebung braucht eine echte Datenbank -- für Tests reicht eine In-Memory-Variante, in der Entwicklung möchten wir schnell starten können. Wir nutzen Quarkus-Profile, um das Verhalten umgebungsabhängig zu steuern.

## 🎯 Lernziele

* Du verstehst das Konzept der Quarkus-Profile (`%dev`, `%test`, `%prod`) und kannst umgebungsspezifische Konfiguration definieren.
* Du kannst mit `@DefaultBean` eine Fallback-Implementierung bereitstellen.
* Du verstehst, wie `@IfBuildProperty` CDI-Beans bedingt aktiviert oder deaktiviert.
* Du erkennst, wie die Kombination aus Profilen und bedingten Beans eine flexible Architektur ermöglicht.

## ✅ Definition of Done

* [ ] In `application.properties` sind profilspezifische Konfigurationen für `%dev`, `%test` und `%prod` definiert.
* [ ] Es existiert eine In-Memory-Implementierung des `RecipesDao`, die als `@DefaultBean` annotiert ist.
* [ ] Die Hibernate-basierte DAO-Implementierung wird über `@IfBuildProperty` bedingt aktiviert.
* [ ] Im `%dev`- und `%test`-Profil wird die In-Memory-Implementierung genutzt, im `%prod`-Profil die Datenbank.
* [ ] Alle Tests laufen weiterhin erfolgreich.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle eine In-Memory-DAO-Implementierung und markiere sie als `@DefaultBean`.
2. Verwende `@IfBuildProperty` an der Hibernate-DAO-Implementierung, um sie nur bei bestimmter Konfiguration zu aktivieren.
3. Konfiguriere die Profile in `application.properties` so, dass die richtige Implementierung pro Umgebung aktiv ist.

## 📚 Selbstlernmaterial

* [Quarkus: Configuration Reference](https://quarkus.io/guides/config-reference) — Konfiguration in Quarkus
* [MicroProfile Config](https://microprofile.io/specifications/microprofile-config/) — MicroProfile Config Spezifikation
* [Quarkus: Configuration Profiles](https://quarkus.io/guides/config-reference#profiles) — Profile-basierte Konfiguration

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen einem Build-Time-Property (`@IfBuildProperty`) und einem Runtime-Property? Warum ist diese Unterscheidung in Quarkus besonders relevant?
* Warum ist `@DefaultBean` nützlich? Was wäre die Alternative, und warum ist sie aufwendiger?
* In welchen Szenarien ist es sinnvoll, auch in der Entwicklung eine echte Datenbank zu verwenden? Wann reicht die In-Memory-Variante?
* Wie verhält sich Quarkus, wenn kein Profil explizit gesetzt ist? Welches Profil wird dann verwendet?
