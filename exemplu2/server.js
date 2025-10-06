'use strict'; // Activează modul strict JavaScript pentru a preveni erori comune (ex. variabile nedeclarate)

// Importă biblioteca Express pentru a crea un server web
const express = require('express');

// Definește constante pentru configurarea serverului
const PORT = 8080; // Portul pe care serverul va asculta (8080, specificat și în Dockerfile cu EXPOSE)
const HOST = '0.0.0.0'; // Adresa gazdă; '0.0.0.0' permite acces din afara containerului (necesar în Docker)

// Creează o instanță a aplicației Express
const app = express();

// Definește o rută GET pentru calea rădăcină ('/')
app.get('/', (req, res) => {
    var os = require("os"); // Importă modulul 'os' pentru a accesa informații despre sistem (ex. hostname)
    res.send('Hello world ' + os.hostname() + '\n'); // Trimite un răspuns: "Hello world" + numele containerului + newline
});

// Pornește serverul să asculte pe portul și gazda definite
app.listen(PORT, HOST);

// Afișează un mesaj în consolă pentru a confirma că serverul rulează
console.log('Running on http://${HOST}:${PORT}'); 