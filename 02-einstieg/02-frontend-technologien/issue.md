---
layout: default
title: Frontend-Technologien
---

# Frontend-Technologien: HTML, CSS, JavaScript & DOM

Bevor wir mit einem Framework wie Angular arbeiten, schauen wir uns die Grundlagen an, auf denen alles aufbaut: HTML für
die Struktur, CSS für das Aussehen und JavaScript für das Verhalten. In dieser Übung experimentiert Ihr direkt im
Browser.

## 🎯 Lernziele

* Du kannst eine einfache HTML-Seite mit semantischen Elementen (Überschriften, Listen, Links, Bilder) erstellen.
* Du kannst mit CSS das Aussehen einer Seite verändern (Farben, Schriftarten, Layout mit Flexbox).
* Du verstehst, was das DOM (Document Object Model) ist und wie JavaScript darauf zugreifen kann.
* Du kannst mit JavaScript einfache Interaktionen umsetzen (z.B. auf Klicks reagieren, Inhalte dynamisch ändern).
* Du kannst die Browser-DevTools (Elements, Console) zur Fehlersuche und zum Experimentieren nutzen.

## ✅ Definition of Done

* [ ] Du hast eine HTML-Seite erstellt, die mindestens eine Überschrift, eine Liste, ein Bild und einen Link enthält.
* [ ] Du hast die Seite mit CSS gestaltet (eigene Farben, Schriftart, ein einfaches Flexbox-Layout).
* [ ] Du hast mit JavaScript eine kleine Interaktion umgesetzt (z.B. ein Button, der Text auf der Seite ändert, oder ein
  Zähler).
* [ ] Du hast die Browser-DevTools geöffnet und im Elements-Tab die DOM-Struktur inspiziert.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Erstelle eine neue Datei `index.html` in einem beliebigen Ordner. Baue ein HTML-Grundgerüst (`<!DOCTYPE html>`,
   `<html>`, `<head>`, `<body>`) und füge verschiedene Elemente hinzu: Überschriften, einen Absatz, eine ungeordnete
   Liste und einen Link. Öffne die Datei im Browser.
2. Erstelle eine Datei `style.css`, binde sie per `<link>` ein und experimentiere mit Styles: Hintergrundfarbe,
   Schriftart, Abstände. Versuche ein einfaches Layout mit `display: flex` (z.B. zwei Spalten nebeneinander).
3. Erstelle eine Datei `script.js`, binde sie per `<script>` am Ende des `<body>` ein. Füge einen Button hinzu und
   schreibe JavaScript, das beim Klick etwas auf der Seite verändert. Verwende `document.querySelector(...)` zum
   Selektieren von Elementen und `addEventListener` für die Interaktion. Nutze `console.log()` und beobachte die
   Ausgabe in der Browser-Console.

   **Beispiel:** Ein Button, der ein Element aus einer Liste entfernt oder hinzufügt:
   ```javascript
   const button = document.querySelector('#mein-button');
   const liste = document.querySelector('#meine-liste');

   button.addEventListener('click', function () {
     const neuesElement = document.createElement('li');
     neuesElement.textContent = 'Neuer Eintrag';
     liste.appendChild(neuesElement);
     console.log('Element hinzugefügt!');
   });
   ```

4. Öffne die Browser-DevTools (F12). Inspiziere die DOM-Struktur im Elements-Tab. Ändere dort live einen CSS-Wert und
   beobachte das Ergebnis. Wechsle in die Console und teste z.B.
   `document.querySelectorAll('li').length`, um die Anzahl der Listenelemente abzufragen.

## 💡 Beispiel

→ [Beispiel öffnen](beispiel/index.html) (HTML + CSS + JS im Unterordner `beispiel/`)

## 📚 Selbstlernmaterial

* [MDN Web Docs — HTML](https://developer.mozilla.org/de/docs/Web/HTML) — Referenz und Tutorials zu HTML
* [MDN Web Docs — CSS](https://developer.mozilla.org/de/docs/Web/CSS) — Referenz und Tutorials zu CSS
* [MDN Web Docs — JavaScript](https://developer.mozilla.org/de/docs/Web/JavaScript) — Referenz und Tutorials zu
  JavaScript
* [MDN Web Docs — DOM](https://developer.mozilla.org/de/docs/Web/API/Document_Object_Model) — Einführung in das Document
  Object Model
* [MDN: querySelector](https://developer.mozilla.org/de/docs/Web/API/Document/querySelector) — Elemente per CSS-Selektor
  finden
* [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — Visueller
  Flexbox-Guide
* [Chrome DevTools Dokumentation](https://developer.chrome.com/docs/devtools/) — Offizielle Anleitung zu den
  Browser-Entwicklertools
* [Javascript30 - Tutorials](https://javascript30.com/)

## 🤔 Reflexionsfragen

* Was ist der Unterschied zwischen HTML, CSS und JavaScript? Welche Aufgabe hat jede der drei Technologien?
* Was ist das DOM und warum ist es wichtig für JavaScript? Was passiert, wenn JavaScript ein Element verändert — wird die
  HTML-Datei geändert?
* Was bedeutet "semantisches Markup"? Warum sollte man `<section>` und `<article>` statt überall `<div>` verwenden?
* Welcher Art von CSS-Selektoren gibt es? Welchen Selektor sollten wir bevorzugt verwenden?
* Welche CSS-Layout-Methoden kennst Du? Wann würdest Du Flexbox, wann Grid verwenden?
* Warum bindet man `<script>` typischerweise am Ende des `<body>` ein (oder nutzt `defer`)? Was passiert, wenn das
  Script vor dem DOM geladen wird?
* Was ist in Javascript der Unterschied zwischen
    * `null` und `undefined`?
    * `==` und `===`?
    * `let`, `var` und `const`?
