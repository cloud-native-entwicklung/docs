---
layout: default
title: Git-Einstieg
---

# Git-Einstieg: Versionsverwaltung mit Git

Eure Projekte (Frontend, API und Backend) sollen versioniert werden. Git ist das Standard-Werkzeug für
Versionsverwaltung in der Softwareentwicklung. In dieser Übung lernt Ihr die wichtigsten Konzepte und Befehle kennen und
sichert Eure bisherigen Sourcen in einem Git-Repository.

## 🎯 Lernziele

* Du kannst ein lokales Git-Repository initialisieren und mit einem Remote-Repository verbinden.
* Du verstehst den Unterschied zwischen Working Directory, Staging Area und Repository.
* Du kannst Dateien gezielt stagen, den Status prüfen und Commits erstellen.
* Du verstehst, warum eine `.gitignore`-Datei wichtig ist und kannst sie korrekt konfigurieren.
* Du kannst Änderungen auf ein Remote-Repository pushen.
* Du verstehst die Grundkonzepte von Git: dezentrale Versionierung, optimistisches Locking, Commits als Diffs.

## ✅ Definition of Done

* [ ] Du hast ein Remote-Repository angelegt und lokal geclont.
* [ ] Du hast eine passende `.gitignore`-Datei erstellt (z.B. `node_modules/`, `dist/`, IDE-Dateien).
* [ ] Du hast Deine bisherigen Sourcen mit `git add` gestagt und mit `git commit` committed.
* [ ] Du hast vor dem Staging und vor dem Commit jeweils `git status` ausgeführt und die Ausgabe verstanden.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Legt als Gruppe im Git Repository Manager ein Remote Repository an und clont dieses bei jedem Gruppenmitglied lokal.
2. Bei einem in der Gruppe: Legt ein Angular-Projekt namens `recipes-app` an. Die Dateien des Angular-Projekts sollen im Root des Git-Repositories liegen. Kopiert diese bei Bedarf an die richtige Stelle.
3. Erstellt eine `.gitignore`-Datei im Wurzelverzeichnis Deines Projekts. Trage dort alles ein, was **nicht** ins
   Repository gehört, z.B.:
   ```
   node_modules/
   dist/
   .idea/
   .vscode/
   *.log
   ```
   Überlegt: Warum sollten diese Dateien/Ordner nicht versioniert werden?

4. Führt danach `git status` aus und lest die Ausgabe aufmerksam —
   welche Dateien werden als "untracked" angezeigt? Prüft, ob die `.gitignore` korrekt greift.

5. Fügt die Dateien schrittweise zur Staging Area hinzu:
   ```bash
   git add .gitignore
   git status          # Prüfen: Was ist jetzt staged, was nicht?
   git add .
   git status          # Prüfen: Sind alle gewünschten Dateien staged?
   ```
   Kontrolliert bei jedem `git status`, dass keine unerwünschten Dateien (z.B. aus `node_modules/`) enthalten sind.

6. Erstellt den Commit:
   ```bash
   git commit -m "Initial commit: Create Recipes App"
   ```

7. Pusht ins Remote Repository:
   ```bash
   git push
   ```

8. Die anderen Teammitglieder pullen die Änderungen.

9. Bei einem anderen Teammitglied: Nehmt eine kleine Änderung an einer Datei vor. Erstellt hierfür einen Branch und mergt diesen über einen Pull Request:
   ```bash
   git checkout -b feature/first-change
   git status
   git add .
   git status
   git commit -m "feat: (what we change)"
   git push -u origin feature/first-change
   # weiter im Git Repository Manager -> PR -> Merge
   git checkout master && git pull
   ```

10. Pullt die Änderungen wieder bei allen Teammitgliedern.

## 💡 Visualisierung

> [Dezentrale Versionsverwaltung](dezentrale-versionsverwaltung.html) — Wie Git als dezentrales System funktioniert
  und warum wir trotzdem einen zentralen Server verwenden.

## 📚 Selbstlernmaterial

* [Learn Git Branching](https://learngitbranching.js.org/) — Interaktives Tutorial zum Lernen von Git-Branching
* [Git Book (Pro Git)](https://git-scm.com/book/de/v2) — Offizielles Git-Buch auf Deutsch
* [GitHub: gitignore Templates](https://github.com/github/gitignore) — Vorlagen für `.gitignore`-Dateien
* [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials) — Umfangreiche Git-Tutorials mit Visualisierungen
* [Git Cheat Sheet (GitHub)](https://education.github.com/git-cheat-sheet-education.pdf) — Übersicht der wichtigsten
  Git-Befehle
* [How to Write a Git Commit Message](https://cbea.ms/git-commit/) — Die 7 Regeln für gute Commit-Messages

## 🤔 Reflexionsfragen

* Was bedeutet "dezentral" im Kontext von Git? Was ist der Unterschied zu einer zentralen Versionsverwaltung (z.B.
  SVN)?
* Was ist der "optimistische Ansatz" bei der Versionsverwaltung? Welche Vorteile und Herausforderungen hat er gegenüber
  dem "pessimistischen Ansatz" (Dateien sperren)?
* Git kann keine leeren Ordner versionieren — es versioniert nur Dateien. Was bedeutet das in der Praxis? Wie geht man
  damit um, wenn ein leerer Ordner im Repository existieren soll?
* Commits in Git enthalten Diffs (zeilenweise Unterschiede). Was bedeutet das in der Praxis, z.B. für Operationen wie
  Cherry-Picking oder Rebase?
* Was ist `origin`? Was sind Remote Branches und wie unterscheiden sie sich von lokalen Branches?
* Was sind Pull Requests (bzw. Merge Requests) und wofür werden sie in der Praxis verwendet?
* Was ist die Staging Area (Index) in Git? Warum gibt es diesen Zwischenschritt zwischen Änderung und Commit?
