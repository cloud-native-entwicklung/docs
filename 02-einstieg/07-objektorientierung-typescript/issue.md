---
layout: default
title: Objektorientierung mit TypeScript
---

# Objektorientierung mit TypeScript

TypeScript unterstützt objektorientierte Programmierung mit Klassen, Interfaces und Sichtbarkeitsbereichen. In dieser
Übung lernst Du die wichtigsten OOP-Konzepte in TypeScript kennen und wendest sie in einem kleinen Projekt an.

## 🎯 Lernziele

* Du kannst ein TypeScript-Projekt mit `npm init` und einer `tsconfig.json` aufsetzen.
* Du verstehst die Grundbegriffe der Objektorientierung: Klasse, Objekt, Attribut, Methode, Konstruktor, Interface.
* Du kannst Interfaces für Datenmodelle und Klassen für Logik einsetzen — und weißt, wann Du was verwendest.
* Du verstehst die Sichtbarkeitsbereiche `public`, `private` und `protected`.

## ✅ Definition of Done

* [ ] Du hast ein TypeScript-Projekt mit `npm init` und `tsconfig.json` aufgesetzt.
* [ ] Du hast ein npm-Script zum Transpilieren und Ausführen eingerichtet.
* [ ] Du hast ein Interface für ein Datenmodell definiert.
* [ ] Du hast eine Klasse mit Konstruktor, privaten Attributen und öffentlichen Methoden geschrieben.
* [ ] Du hast das Programm erfolgreich transpiliert und mit `node` ausgeführt.
* [ ] Ihr habt die Reflexionsfragen schriftlich beantwortet.

## 📖 Grundbegriffe

Bevor wir loslegen, hier die wichtigsten Begriffe:

| Begriff | Bedeutung |
|---------|-----------|
| **Klasse** | Ein Bauplan für Objekte. Definiert, welche Attribute und Methoden ein Objekt hat. |
| **Objekt** | Eine konkrete Instanz einer Klasse, erzeugt mit `new`. |
| **Attribut** | Eine Variable, die zu einem Objekt gehört (auch: Eigenschaft, Property, Feld). |
| **Methode** | Eine Funktion, die zu einem Objekt gehört und auf dessen Attribute zugreifen kann. |
| **Konstruktor** | Eine spezielle Methode (`constructor`), die beim Erzeugen eines Objekts aufgerufen wird. |
| **Interface** | Ein Vertrag, der beschreibt, welche Eigenschaften ein Objekt haben muss — ohne Implementierung. |
| **Sichtbarkeit** | Bestimmt, wer auf ein Attribut oder eine Methode zugreifen darf: `public`, `private`, `protected`. |

## 🪜 Arbeitsschritte

### 1. Projekt aufsetzen

Erstelle ein neues Verzeichnis und initialisiere ein NPM-Projekt:

```bash
mkdir oop-uebung
cd oop-uebung
# '-y' überspringt alle Fragen und erzeugt eine package.json mit Standardwerten
npm init -y
# '-D' installiert TypeScript als Dev-Dependency,
# weil es nur zum Transpilieren benötigt wird, nicht zur Laufzeit.
npm install -D typescript
```

Erstelle eine `tsconfig.json`, die alle `.ts`-Dateien im Projekt transpiliert:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true
  },
  "include": ["*.ts"]
}
```

Ergänze in der `package.json` ein Script zum Transpilieren und Ausführen:

```json
{
  "scripts": {
    "start": "tsc && node index.js"
  }
}
```

Damit kannst Du jederzeit mit `npm start` Dein Programm bauen und starten.

### 2. Interface für das Datenmodell definieren

In TypeScript verwenden wir **Interfaces** für reine Datenmodelle (Objekte ohne Logik). Erstelle eine Datei `book.ts`:

```typescript
// book.ts

// Ein Interface beschreibt die Struktur eines Objekts.
// Es erzeugt KEINEN JavaScript-Code —
// es existiert nur zur Entwicklungszeit.

// 'export' macht das Interface für andere Dateien sichtbar.
// Ohne 'export' kann es nur innerhalb dieser Datei verwendet werden.
// In TypeScript ist jede Datei ein eigenes Modul — nur exportierte
// Elemente können mit 'import' in anderen Dateien genutzt werden.

// Ein Interface kann ein anderes Interface als Typ verwenden.
// So können wir komplexe Datenmodelle
// aus kleinen Bausteinen zusammensetzen.
export interface Author {
  name: string;
  birthYear: number;
}

export interface Book {
  isbn: string;
  title: string;
  // Das '?' macht das Feld optional — es muss nicht angegeben werden.
  // Beim Zugriff ist der Typ dann 'Author | undefined'.
  author?: Author;
  year: number;
}
```

> **Warum Interface statt Klasse?** Ein Buch und ein Autor sind hier reine Datenobjekte ohne eigenes Verhalten
> (Methoden). In TypeScript nimmt man dafür Interfaces — sie sind leichtgewichtig und erzeugen keinen Runtime-Code.

### 3. Klasse mit Konstruktor, Attributen und Methoden

Für **Logik** verwenden wir Klassen. Erstelle eine Datei `library.ts`:

```typescript
// library.ts
import { Book } from './book';

export class Library {

  // --- Attribute ---
  // 'private' bedeutet: Nur die Klasse selbst
  // kann auf dieses Attribut zugreifen.
  // Von außen ist '_books' nicht sichtbar.
  // 'readonly' verhindert, dass die Variable
  // neu zugewiesen wird (this._books = [...]).
  // Das Array kann aber weiterhin verändert
  // werden (push, splice etc.) — readonly
  // schützt nur die Referenz, nicht den Inhalt.
  private readonly _books: Book[] = [];

  // --- Konstruktor ---
  // Wird aufgerufen, wenn ein neues Objekt
  // erzeugt wird: new Library("Stadtbibliothek")
  // Mit Sichtbarkeitsbereich oder 'readonly'
  // wird der Parameter automatisch als Attribut
  // der Klasse angelegt und zugewiesen.
  // Das erspart die manuelle Deklaration und Zuweisung (this.name = name).
  constructor(public readonly name: string) {}

  // --- Methoden ---
  // In TypeScript ist 'public' der Standard-Sichtbarkeitsbereich.
  // Man kann 'public' also weglassen —
  // die folgenden Methoden sind alle öffentlich.
  addBook(book: Book): void {
    this._books.push(book);
    console.log(`"${book.title}" wurde zur ${this.name} hinzugefügt.`);
  }

  listBooks(): void {
    if (this._books.length === 0) {
      console.log(`Die ${this.name} ist leer.`);
      return;
    }
    console.log(`Bücher in der ${this.name}:`);
    for (const book of this._books) {
      // '?.' (Optional Chaining) greift nur auf
      // 'name' zu, wenn 'author' gesetzt ist.
      // '??' (Nullish Coalescing) liefert den
      // Ersatzwert, wenn das Ergebnis
      // null/undefined ist.
      const authorName = book.author?.name ?? 'unbekannt';
      console.log(`  - "${book.title}" von ${authorName} (${book.year})`);
    }
  }

  findByAuthor(author: string): Book[] {
    return this._books.filter(book => book.author?.name === author);
  }

  // --- Getter ---
  // Ein Getter sieht von außen aus wie ein Attribut, ist aber eine Methode.
  // Aufruf: library.books (ohne Klammern, wie ein Attribut)
  // Der Getter heißt 'books' — nach außen
  // sieht es aus wie die Property 'books',
  // intern greift er aber auf das private
  // '_books' zu.
  // Zwei Schutzebenen:
  // 1. 'readonly Book[]' schützt zur
  //    Compile-Zeit — push(), splice() etc.
  //    erzeugen einen Fehler.
  // 2. '[...this._books]' (Spread-Operator -
  //    kopiert das Array) schützt zur Laufzeit
  //    — selbst wenn jemand den Compiler
  //    austrickst (z.B. per 'as Book[]'),
  //    verändert er nur die Kopie, nicht
  //    das Original.
  get books(): readonly Book[] {
    return [...this._books];
  }

  getBookCount(): number {
    return this._books.length;
  }
}
```

### 4. Sichtbarkeitsbereiche

TypeScript kennt drei Sichtbarkeitsbereiche:

| Modifier | Zugriff von der Klasse selbst | Zugriff von Kindklassen | Zugriff von außen |
|----------|:---:|:---:|:---:|
| `public` | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ❌ |
| `private` | ✅ | ❌ | ❌ |

In unserem Beispiel:
- `_books` ist `private readonly` — niemand außer der `Library`-Klasse kann auf das Array zugreifen, und die Referenz kann nicht neu zugewiesen werden. Der Getter `books` gibt eine Kopie nach außen.
- `name` ist `readonly` und `public` (Standard) — jeder kann den Namen lesen, aber niemand kann ihn ändern.
- Die Methoden haben keinen Modifier — sie sind automatisch `public` und bilden die **öffentliche Schnittstelle** der Klasse.

### 5. Programm zusammensetzen

Erstelle die Datei `index.ts`:

```typescript
// index.ts
import { Book } from './book';
import { Library } from './library';

// Objekte vom Typ 'Book' erzeugen (Interface → kein 'new' nötig)
const book1: Book = {
  isbn: '978-0-13-235088-4',
  title: 'Clean Code',
  author: { name: 'Robert C. Martin', birthYear: 1952 },
  year: 2008
};

const book2: Book = {
  isbn: '978-0-13-595705-9',
  title: 'The Pragmatic Programmer',
  author: { name: 'David Thomas', birthYear: 1956 },
  year: 2019
};

const book3: Book = {
  isbn: '978-0-13-494164-6',
  title: 'Clean Architecture',
  // author ist optional → kann weggelassen werden
  year: 2017
};

// Objekt vom Typ 'Library' erzeugen (Klasse → mit 'new')
const library = new Library('Stadtbibliothek');

// Methoden aufrufen
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();

// Suche nach Autor
const martinBooks = library.findByAuthor('Robert C. Martin');
console.log(`\nBücher von Robert C. Martin: ${martinBooks.length}`);

// Zugriff auf 'readonly'-Attribut
console.log(`Bibliotheksname: ${library.name}`);

// Das hier würde NICHT funktionieren (Kommentar entfernen zum Testen):
// library._books.push(book1);  // Fehler: '_books' is private
// library.name = 'Neuer Name';
//   Fehler: Cannot assign to 'name'
//   because it is a read-only property

// library.books.push(book1) würde kompilieren, aber wirkungslos sein —
// der Getter gibt eine Kopie zurück, das Original bleibt unverändert.
```

### 6. Ausführen und experimentieren

```bash
npm start
```

Erwartete Ausgabe:

```
"Clean Code" wurde zur Stadtbibliothek hinzugefügt.
"The Pragmatic Programmer" wurde zur Stadtbibliothek hinzugefügt.
"Clean Architecture" wurde zur Stadtbibliothek hinzugefügt.
Bücher in der Stadtbibliothek:
  - "Clean Code" von Robert C. Martin (2008)
  - "The Pragmatic Programmer" von David Thomas (2019)
  - "Clean Architecture" von unbekannt (2017)
Bücher von Robert C. Martin: 1
Bibliotheksname: Stadtbibliothek
```

Experimentiere danach:
- Entferne die Kommentare bei den fehlerhaften Zeilen am Ende von `index.ts` und beobachte die Fehlermeldungen.
- Erstelle eine Methode `findByIsbn(isbn: string)` in der `Library`-Klasse. Überlege: Was ist der passende
  Rückgabetyp? Eine ISBN ist eindeutig — es gibt also entweder genau ein Buch oder keins. (Tipp: `Book | undefined`)
- Erstelle eine Methode `removeBook(isbn: string)`.

## 🔄 Vergleich: TypeScript vs. Java

Falls Du bereits Java kennst, hilft Dir diese Übersicht, die Unterschiede einzuordnen:

| Thema | Java | TypeScript |
|-------|------|------------|
| **Standard-Sichtbarkeit** | `package-private` (ohne Modifier) | `public` (ohne Modifier) |
| **Ordnungsstruktur** | Packages (`package com.example;`, `import com.example.Book;`) | Module/Dateien (`export`, `import { Book } from './book'`) |
| **Datenmodelle** | Klassen mit Gettern/Settern (oder `record` ab Java 16) | Interfaces (leichtgewichtig, kein Runtime-Code) |
| **Primitive Datentypen** | `int`, `double`, `boolean`, `char`, `long`, ... | Nur `number`, `string`, `boolean` (kein `int` vs. `double`) |
| **Typsystem** | Nominale Typisierung (Klasse/Interface muss explizit implementiert werden) | Strukturelle Typisierung (Duck Typing: passt die Struktur, passt der Typ) |
| **Kompilierung** | Kompiliert zu Bytecode (JVM) | Transpiliert zu JavaScript (Browser/Node.js) |
| **Konstruktor-Kurzform** | Nicht vorhanden | Parameter mit `private`/`readonly` werden automatisch zu Attributen |

> **Duck Typing** bedeutet: „Wenn es wie eine Ente aussieht und wie eine Ente quakt, dann ist es eine Ente." In TypeScript
> muss ein Objekt kein Interface explizit implementieren — es reicht, wenn es die gleiche Struktur hat. Beispiel:
>
> ```typescript
> interface Book { title: string; }
> // Dieses Objekt erfüllt das Interface,
> // ohne es explizit zu implementieren:
> const myBook = { title: 'Clean Code', author: 'Robert C. Martin' };
> const b: Book = myBook; // ✅ Funktioniert — 'title' ist vorhanden
> ```

## 📚 Selbstlernmaterial

* [TypeScript Handbook: Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html) — Klassen in TypeScript
* [TypeScript Handbook: Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html) — Object Types und Interfaces
* [TypeScript Playground](https://www.typescriptlang.org/play) — Online-Editor zum Experimentieren

## 🤔 Reflexionsfragen

* Wann verwendest Du ein Interface und wann eine Klasse? Was ist die TypeScript-Konvention für Datenmodelle?
* Was passiert mit `private` und `public` im generierten JavaScript? Werden sie zur Laufzeit durchgesetzt?
* Warum ist es sinnvoll, Attribute als `private` zu deklarieren, wenn die Klasse öffentliche Methoden zum Zugriff hat?
* Was bedeutet `?.` (Optional Chaining) und `??` (Nullish Coalescing)? Wann braucht man sie?
