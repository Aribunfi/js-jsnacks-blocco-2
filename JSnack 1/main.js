// JSnack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const numeroUtente = prompt ("Inserisci un numero per favore");

if (numeroUtente % 2 ==0) {
    console.log (numeroUtente);
} else {
    console.log (numeroUtente +1);
}