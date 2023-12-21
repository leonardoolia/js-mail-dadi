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

//? 3. Preparare messaggi per decretare il vincitore

const userWin = 'Congratulazioni, hai vinto tu';
const pcWin = 'Che peccato, ha vinto il pc';
const retry = 'Pareggio, riprova';


//? 4. Determinare il vincitore in base al numero più alto

if (userDice > pcDice) {
    console.log(userWin);
} else if (userDice < pcDice) {
    console.log(pcWin);
} else {
    console.log(retry);
};


//? 5. Stampare i risultati in pagina

const userDiceNumber = userDice;
console.log(userDiceNumber);

const pcDiceNumber = pcDice;
console.log(pcDiceNumber);

// Risultato dado utente
user.innerText = 'Il numero del tuo dado è: ' + userDiceNumber;

// Risultato dado pc
pc.innerText = 'Il numero del dado avversario è: ' + pcDiceNumber;

// Risultato finale
if (userDice > pcDice) {
    finalResult.innerText = userWin;
} else if (userDice < pcDice) {
    finalResult.innerText = pcWin;
} else {
    finalResult.innerText = retry;
};


