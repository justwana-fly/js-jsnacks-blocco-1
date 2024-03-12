let numElementi = parseInt(prompt("Inserisci un numero di elementi"));

let arrayNumeri = [];

for (let i = 0; i < numElementi; i++) {
    let numeroCasuale = Math.floor(Math.random() * 100) + 1;
    arrayNumeri.push(numeroCasuale);
}

if (arrayNumeri.length >= 5) {
    console.log("Gli ultimi 5 elementi dell'array sono:", arrayNumeri.slice(-5));
} else {
    console.log("L'array non contiene abbastanza elementi per stampare gli ultimi 5.");
}
