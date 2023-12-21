//? 1. Recuperare gli elementi dall'HTML

const user = document.getElementById('user-dice');
const pc = document.getElementById('pc-dice');
const finalResult = document.getElementById('final-result');


//? 2. Creare variabili per estrazione casuale di numeri da 1 a 6

// Dado dell'utente
const userDice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log('Dado utente: ', userDice);

// Dado del pc
const pcDice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log('Dado pc: ', pcDice);



