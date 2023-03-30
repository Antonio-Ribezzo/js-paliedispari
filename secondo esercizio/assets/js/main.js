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
let button = document.querySelector('#gioca') 

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
    document.querySelector('#tu').innerHTML += `<h3 class="text-center">${numeroUtente}</h3>`

    //assegno ad una variabile il numero della cpu
    const numeroCpu = numeroRandomico(1,5)
    console.log(numeroCpu)
    document.querySelector('#cpu').innerHTML += `<h3 class="text-center">${numeroCpu}</h3>`

    //assegno la somma dei due numeri ad una variabile
    let somma = numeroUtente + numeroCpu
    console.log (somma)

    console.log(funPariDispari(numeroUtente, numeroCpu))

    if(pari == funPariDispari(numeroUtente, numeroCpu)){
        console.log('hai vinto!')
        document.querySelector('#result').innerHTML += `
        <p>La somma è ${somma}</p>
        <h3 class="text-success">hai vinto!!!</h3>
        `
    } else if (pari != funPariDispari(numeroUtente, numeroCpu)) {
        console.log('non hai vinto!')
        document.querySelector('#result').innerHTML += `
        <p>La somma è ${somma}</p>
        <h3 class="text-danger">hai perso</h3>
        `
    } 
})

// prendo il pulsante refresh e lo associo ad una variabile
const buttonRefresh = document.querySelector('#refresh')
// associo al click del pulsante Refresh la funzione che effettua il refresh della pagina
buttonRefresh.addEventListener('click', function(){
    window.location.reload();
})