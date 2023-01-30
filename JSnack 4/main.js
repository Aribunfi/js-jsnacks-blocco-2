// JSnack4(Bonus)
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const numbersA = [3, 5, 7, 12, 14, 23];
const numbersB = [2, 19];

let lessElemntsList;
let moreElementsList;

if (numbersA.length > numbersB.length) {
     moreElementsList = numbersA;
     lessElemntsList = numbersB;
} else {
    moreElementsList = numbersB;
    moreElementsList = numbersA;
}

const differencebetweenLists = moreElementsList.length - lessElemntsList.length;

for (let i = 0; i < differencebetweenLists; i++) {
    lessElemntsList.push (Math.floor (Math.random () *100) + 1)
}