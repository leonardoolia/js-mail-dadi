// //! ESERCIZIO 1

// //? 1. Recuperare gli elementi dall'HTML

// const user = document.getElementById('user-dice');
// const pc = document.getElementById('pc-dice');
// const finalResult = document.getElementById('final-result');


// //? 2. Creare variabili per estrazione casuale di numeri da 1 a 6

// // Dado dell'utente
// const userDice = Math.floor(Math.random() * 6) + 1;
// console.log('Dado utente: ', userDice);

// // Dado del pc
// const pcDice = Math.floor(Math.random() * 6) + 1;
// console.log('Dado pc: ', pcDice);

// //? 3. Preparare messaggi per decretare il vincitore

// const userWin = 'Congratulazioni, hai vinto tu';
// const pcWin = 'Che peccato, ha vinto il pc';
// const retry = 'Pareggio, riprova';


// //? 4. Determinare il vincitore in base al numero più alto

// if (userDice > pcDice) {
//     console.log(userWin);
// } else if (userDice < pcDice) {
//     console.log(pcWin);
// } else {
//     console.log(retry);
// };


// //? 5. Stampare i risultati in pagina

// const userDiceNumber = userDice;
// console.log(userDiceNumber);

// const pcDiceNumber = pcDice;
// console.log(pcDiceNumber);

// // Risultato dado utente
// user.innerText = 'Il numero del tuo dado è: ' + userDiceNumber;

// // Risultato dado pc
// pc.innerText = 'Il numero del dado avversario è: ' + pcDiceNumber;

// // Risultato finale
// if (userDice > pcDice) {
//     finalResult.innerText = userWin;
// } else if (userDice < pcDice) {
//     finalResult.innerText = pcWin;
// } else {
//     finalResult.innerText = retry;
// };

//! ESERCIZIO 2

//? 1. Recuperare gli elementi HTML

// input email
const email = document.getElementById('email');
console.log(email);

// bottone
const button = document.getElementById('button');

// h2
const accessStatus = document.getElementById('access-status');

// Form

const htmlForm = document.getElementById('form');


//? 2. Creare un array di email valide

const validEmail = ["ciccio12@gmail.com",
    "pippo12@gmail.com",
    "paperino12@gmail.com"
];

//? 3. Creare un messaggio per l'utente

const accessMessage = 'Accesso consentito';
const deniedMessage = 'Accesso negato';


//? 4. Recuperare il valore dell'email dal form HTML

button.addEventListener('click', function () {
    // Raccolgo il value dall'inptu
    const emailValue = email.value.trim();

    //! Validazione
    if (!emailValue) {
        alert('email obbligatoria');
        return;
    }


    // //? 5. Verificare se l'email inserita dall'utente è presente nell'array
    let allowedUser = false;

    // Controllo le email della lista
    for (let i = 0; i < validEmail.length; i++) {
        if (emailValue === validEmail[i]) {
            console.log(accessMessage);
            allowedUser = true;
        }
    }

    //? 6. Stampare messaggio sullo schermo
    if (allowedUser) {
        accessStatus.innerText = accessMessage;
    } else {
        accessStatus.innerText = deniedMessage;
    };

});


