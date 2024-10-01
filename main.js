

// Variabili
let totaleGatti = 90; // Numero totale dei gatti
let gattiInFila = 5;  // Numero di gatti per fila

// console.log(`Numero totale di gatti: ${totaleGatti} \nNumero di gatti in file ${gattiInFila}`);

// Calcoli
let numeroFile = Math.floor(totaleGatti / gattiInFila); // Numero di file
let gattiMancanti = gattiInFila - (totaleGatti % gattiInFila); // Gatti mancanti per una nuova fila
let gattiRimanenti = totaleGatti % gattiInFila; // Gatti rimasti fuori

// Stampa del risultato in console
console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiRimanenti}.`);
