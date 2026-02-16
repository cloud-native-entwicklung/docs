// Elemente per querySelector selektieren
const rezeptListe = document.querySelector('#rezept-liste');
const eingabefeld = document.querySelector('#neues-rezept');
const button = document.querySelector('#hinzufuegen-btn');
const anzahlAnzeige = document.querySelector('#anzahl');

// Anzahl aktualisieren
function aktualisiereAnzahl() {
  const alleRezepte = rezeptListe.querySelectorAll('li');
  anzahlAnzeige.textContent = alleRezepte.length;
  console.log(`Rezepte aktualisiert: ${alleRezepte.length} Einträge`);
}

// Neues Rezept hinzufügen
function rezeptHinzufuegen() {
  const name = eingabefeld.value.trim();
  if (name === '') {
    console.warn('Leerer Name — kein Rezept hinzugefügt.');
    return;
  }

  // Neues <li>-Element erzeugen und dem DOM hinzufügen
  const neuesElement = document.createElement('li');
  neuesElement.textContent = name;
  rezeptListe.appendChild(neuesElement);

  eingabefeld.value = '';
  aktualisiereAnzahl();
}

// Event-Listener: Klick auf Button
button.addEventListener('click', rezeptHinzufuegen);

// Event-Listener: Enter-Taste im Eingabefeld
eingabefeld.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    rezeptHinzufuegen();
  }
});

console.log('Script geladen. Rezepte-App bereit.');
