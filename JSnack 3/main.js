// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte) [W, W, L, X, X, W, L, X],
// stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.


const risultati = ["W", "W", "L", "X", "X", "W", "L", "X"];

let W = false;
let L = false;
let X = false;

for (i = 0; i < risultati.length; i++) {
         if ("W"==true) {
            W = W + risultati[i];
        } 
        
        console.log('vittorie');
        
        "and"

        if ("L"==true) {
            L = L + risultati[i];
        }

        console.log('sconfitte');

        "and"

        if ("X"==true) {
            X = X + risultati[i];
        }

        console.log('pareggi');


    }