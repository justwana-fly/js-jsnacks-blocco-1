
let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frigo.push(`pesca`) 

let cocomero = false

for (let i = 0; i < frigo.length; i++) {
    if (frigo[i] === 'cocomero') {
        cocomero = true;
        break;
    }
}

if (cocomero){
    console.log("Trovato! Devo solo preparare il cocktail.")
}else{
    console.log("Oh no, devo uscire a comprare il cocomero!")
}
