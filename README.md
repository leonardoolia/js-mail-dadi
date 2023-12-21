Ciao ragazzi,  
esercizio di oggi: Gioco dei dadi e Finta Login  
Nome repo: `js-mail-dadi`

Oggi due esercizi al prezzo di uno, perchè "a Natale a Natale  si può fare di piùùùùù" 

Potete svolgere entrambi gli esercizi in un unico file HTML e JS, se la cosa vi confonde, separateli, purchè siano sulla stessa repo.

**ESERCIZIO 1** - Gioco dei dadi  
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.  
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
**ESERCIZIO 2** - Finta Login  
Inventa una lista di email autorizzate  
Chiedi all’utente la sua email, con un piccolo form.  
controlla che la mail inserita sia nella lista di chi può accedere,  
stampa un messaggio appropriato sull’esito del controllo.

Prima di partire a scrivere codice poniamoci qualche domanda:  
Che ci sia un array da qualche parte?  
Cosa devo controllare esattamente?

**NOTE:**  
- è vietato utilizzare il metodo `includes()`
- La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
- Non è necessario usare il tag `<form>`, ma se lo usate, ricordate di impostare il `type="button"` sul `<button>` altrimenti il form ricaricherà la pagina.
- L'esito del controllo deve essere stampato in pagina
-----------------------------------------------------------------
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!
Buon lavoro e buon divertimento!

<hr>

# Esercizio 1
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.

Stampiamo in pagina i due tiri e il risultato.

### Step

1. Recuperare gli elementi dall'HTML
1. Creare variabili per estrazione casuale di numeri da 1 a 6
1. Preparare messaggi per decretare il vincitore
1. Determinare il vincitore in base al numero più alto
1. Stampare i risultati in pagina

<hr>

# Esercizio 2
Inventa una lista di email autorizzate.

Chiedi all’utente la sua email, con un piccolo form.

Controlla che la mail inserita sia nella lista di chi può accedere.

Stampa un messaggio appropriato sull’esito del controllo.


### Step

1. Recuperare gli elementi dall'HTML
1. Creare un array di email valide
1. Creare un messaggio per l'utente
1. Recuperare il valore dell'email dal form HTML
1. Verificare se l'email inserita dall'utente è presente nell'array
1. Stampare messaggio sullo schermo