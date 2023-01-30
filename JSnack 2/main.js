// JSnack2
// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const redTextEl = document.getElementById ("text-red");
const greenTextEl = document.getElementById ("text-green");

const numbers = [3, 5, 6, 7, 10, 18, 21];

for (let i=0; i < numbers.length; i++) {
    const thisNumber = numbers[i];
    console.log(thisNumber);

    if (thisNumber % 2 == 0) {
        greenTextEl.append (thisNumber + " ");
    } else {
        redTextEl.append (thisNumber + " ");
    }


}