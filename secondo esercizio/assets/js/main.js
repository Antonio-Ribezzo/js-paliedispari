/*
Secondo esercizio:
    - Pari e Dispari
        - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
        - Genero un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
        - Sommo i due numeri. 
        - Stabilisco se la somma dei due numeri è pari o dispari (usando una funzione).
        - Dichiaro chi ha vinto.
*/

//scrivo una funzione per generare un numero random da 1 a 5 da assegnare alla scelta della cpu
function numeroRandomico(min, max){
	return Math.floor(Math.random() * max) + min;//da min a max
}

//scrivo una funzione che mi dica se la somma di due numeri e pari o dispari
function funPariDispari(num1, num2){
    let sum = num1 + num2
    if(sum % 2 == 0){
        return true // è pari
    } else{
        return false // è dispari
    }
}

//assegno ad una costante il pulsante
let button = document.querySelector('button') 

//assegno al click sul pulsante "gioca" l'avvio di una nuova funzione che acquisisce i dati inseriti dall'utente, assegna un numero randomico alla cpu tramite la funzione scritta sopra, effettua la somma e assegna il vincitore
button.addEventListener('click', function(){
    // assegno ad una variabile la scelta "pari" dell'utente tramite input radio
    let pari = document.querySelector('#pari').checked
    console.log(pari)
    // assegno ad una variabile la scelta "dispari" dell'utente tramite input radio
    let dispari = document.querySelector('#dispari').checked
    console.log(dispari)

    //assegno ad una variabile la scelta del numero da parte dell'utente tramite la select
    let numeroUtente = parseInt(document.querySelector("#sceltaNumero").value)
    console.log(numeroUtente)

    //assegno ad una variabile il numero della cpu
    const numeroCpu = numeroRandomico(1,5)
    console.log(numeroCpu)

    //assegno la somma dei due numeri ad una variabile
    let somma = numeroUtente + numeroCpu
    console.log (somma)

    if(pari == funPariDispari(numeroUtente, numeroCpu)){
        console.log('hai vinto!')
    } else {
        console.log('non hai vinto!')
    }
})
