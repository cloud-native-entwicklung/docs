---
layout: default
title: Quarkus-Projekt erstellen
---

# Ein Quarkus-Projekt erstellen und starten

Bevor wir die Rezepte-API implementieren, brauchen wir ein lauffähiges Quarkus-Projekt. In dieser Übung erstellst Du das Projekt über die Kommandozeile, baust es mit Maven und erkundest den Quarkus Dev Mode mit seiner DevUI.

## 🎯 Lernziele

* Du kannst ein neues Quarkus-Projekt mit der REST-Extension über den Maven-Befehl oder die [Quarkus CLI](https://quarkus.io/guides/cli-tooling) erstellen.
* Du verstehst die grundlegende Projektstruktur eines Quarkus-Projekts (pom.xml, src/main, src/test, application.properties).
* Du kannst das Projekt mit `mvn quarkus:dev` im Development Mode starten und die Anwendung unter `http://localhost:8080` aufrufen.
* Du kennst die Quarkus DevUI (`http://localhost:8080/q/dev-ui`) und ihre Möglichkeiten zur Laufzeitanalyse.
* Du verstehst das Konzept von Extensions in Quarkus und kannst erklären, warum `quarkus-rest` und `quarkus-rest-jackson` benötigt werden.

## ✅ Definition of Done

* [ ] Ein Quarkus-Projekt ist angelegt und baut erfolgreich mit `mvn compile`.
* [ ] Die Extensions `quarkus-rest`, `quarkus-rest-jackson` und `quarkus-arc` sind im `pom.xml` vorhanden.
* [ ] Die Anwendung startet im Dev Mode (`mvn quarkus:dev`) und ist unter `http://localhost:8080` erreichbar.
* [ ] Du hast die DevUI unter `http://localhost:8080/q/dev-ui` geöffnet und ihre Funktionen erkundet.
* [ ] Du hast eine Änderung am Code vorgenommen und beobachtet, dass Quarkus sie ohne Neustart übernimmt (Hot Reload).
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Lies den [Quarkus Getting Started Guide](https://quarkus.io/guides/getting-started) und achte besonders auf die **Prerequisites** (Java-Version, Maven-Version etc.). Prüfe Deine installierte Maven-Version mit:

   ```bash
   mvn -v
   ```

   Falls Deine Maven-Version nicht zu den Anforderungen der aktuellen Quarkus-Version passt, kannst Du im Guide oben rechts über die **Versionsauswahlbox** eine ältere Quarkus-Version wählen. Prüfe dann erneut die Prerequisites dieser Version.

2. Erstelle ein neues Quarkus-Projekt mit folgendem Maven-Befehl (passe ggf. die Versionsnummer an):

   ```bash
   mvn io.quarkus.platform:quarkus-maven-plugin:3.32.1:create \
       -DprojectGroupId=de.huk.schulung \
       -DprojectArtifactId=recipes-api-provider \
       -Dextensions="rest,rest-jackson"
   ```

   Die Extension `quarkus-arc` ist standardmäßig in jedem Quarkus-Projekt enthalten und muss nicht explizit angegeben werden. Alternativ kannst Du den [Quarkus Code Generator](https://code.quarkus.io/) verwenden und dort die Extensions auswählen.
3. Öffne das Projekt in Deiner IDE, sichte die Projektstruktur und die generierten Dateien, v.a die `pom.xml`. Baue das Projekt mit `mvn compile`, um sicherzustellen, dass alles korrekt eingerichtet ist.
4. Starte die Anwendung im Dev Mode mit `mvn quarkus:dev`. Öffne `http://localhost:8080` und `http://localhost:8080/q/dev-ui` im Browser. Erkunde die verfügbaren Funktionen der DevUI (z.B. Extensions, Configuration, Continuous Testing).
5. Nimm eine kleine Änderung am generierten Code vor (z.B. den Rückgabewert eines Endpunkts) und beobachte, wie Quarkus den Code ohne Neustart neu kompiliert und bereitstellt.
6. Lege ein Git-Repository an und sichere den aktuellen Stand.

## 📚 Selbstlernmaterial

* [Quarkus: Getting Started Guide](https://quarkus.io/guides/getting-started) — Offizieller Einstieg
* [Quarkus: CLI Tooling](https://quarkus.io/guides/cli-tooling) — Quarkus CLI Dokumentation
* [Quarkus Code Generator](https://code.quarkus.io/) — Projekt-Generator im Browser
* [Quarkus: Dev Mode](https://quarkus.io/guides/maven-tooling#dev-mode) — Development Mode und Hot Reload

## 🤔 Reflexionsfragen

* Was ist "Convention over Configuration"? Welche Konventionen wendet Quarkus an, die Dir bei der Projekterstellung auffallen (z.B. Portnummer, Verzeichnisstruktur, application.properties)?
* Welche Funktionen bietet der Quarkus Dev Mode? Warum ist Hot Reload für die Entwicklungsproduktivität wichtig? Wie unterscheidet sich das von einem klassischen Java-Deployment?
* Was ist der Unterschied zwischen `quarkus-rest` und `quarkus-rest-jackson`? Warum werden beide benötigt?
* Was zeigt die DevUI an und wie kann sie beim Entwickeln helfen? Welche Informationen findest Du dort, die Dir bei der Fehlersuche nützlich sein könnten?
* Was ist die Quarkus BOM (Bill of Materials) im `pom.xml`? Welchen Zweck hat sie?
* Was sollen die generierten Tests sicherstellen? Wofür benötigen wir Tests?
* Was ist Test Driven Development (TDD)? Welche Vorteile und Herausforderungen sind damit verbunden?
