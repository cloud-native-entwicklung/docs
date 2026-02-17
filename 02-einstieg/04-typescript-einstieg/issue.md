---
layout: default
title: TypeScript-Einstieg
---

# TypeScript-Einstieg: Typisiertes JavaScript

TypeScript erweitert JavaScript um ein statisches Typsystem. Angular-Projekte werden komplett in TypeScript geschrieben.
In dieser Übung installiert Ihr den TypeScript-Compiler, schreibt ein kleines Programm und schaut Euch an, was daraus
wird.

## 🎯 Lernziele

* Du kannst den TypeScript-Compiler (`tsc`) installieren und eine `.ts`-Datei nach JavaScript transpilieren.
* Du verstehst den Unterschied zwischen TypeScript und JavaScript und warum TypeScript Fehler bereits zur
  Entwicklungszeit erkennt.
* Du kannst grundlegende TypeScript-Konzepte anwenden: Typannotationen, Interfaces, Enums und Funktionstypen.
* Du kannst den generierten JavaScript-Code lesen und die Unterschiede zum TypeScript-Quellcode erklären.

## ✅ Definition of Done

* [ ] Du hast `tsc` (TypeScript-Compiler) global via NPM installiert.
* [ ] Du hast eine `.ts`-Datei geschrieben, die Typannotationen, ein Interface und eine typisierte Funktion enthält.
* [ ] Du hast die Datei mit `tsc` transpiliert und die erzeugte `.js`-Datei untersucht.
* [ ] Du hast einen absichtlichen Typfehler eingebaut und beobachtet, welche Fehlermeldung `tsc` liefert.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Installiere den TypeScript-Compiler global: `npm install -g typescript`. Prüfe die Installation mit `tsc --version`.
2. Erstelle eine Datei `hello.ts` mit einer typisierten Funktion, z.B.:
   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   function greet(person: Person): string {
     return `Hallo ${person.name}, Du bist ${person.age} Jahre alt.`;
   }

   console.log(greet({ name: "Anna", age: 22 }));
   ```
3. Transpiliere die Datei mit `tsc hello.ts`. Öffne die erzeugte `hello.js` und vergleiche sie mit dem
   TypeScript-Original. Führe das Ergebnis mit `node hello.js` aus.
4. Baue absichtlich einen Fehler ein (z.B. `greet({ name: "Anna", age: "zweiundzwanzig" })`) und beobachte, was `tsc`
   meldet. Experimentiere mit weiteren Typen: Arrays, Enums, optionale Felder (`?`).

## 📚 Selbstlernmaterial

* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) — Offizielles Handbuch
* [TypeScript Playground](https://www.typescriptlang.org/play) — Online-Editor zum Experimentieren
* [TypeScript: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) — Die wichtigsten Typen im Überblick

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen Kompilieren und Transpilieren? Warum spricht man bei TypeScript von Transpiling?
* Welche Vorteile bietet TypeScript gegenüber reinem JavaScript?
* Was passiert mit den TypeScript-Typen im generierten JavaScript? Warum sind sie zur Laufzeit nicht mehr vorhanden?
* Welche Bedeutung hat die Datei `tsconfig.json`?
* Wie verhält sich TypeScript bei `any`? Warum sollte man `any` möglichst vermeiden?
* Was ist der Unterschied zur globalen Installation im Vergleich zur Installation einer Projekt-Dependency (`npm init`
  und `npm i typescrpt`)?
* Was ist Ducktyping?
