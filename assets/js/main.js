/*
Primo esercizio:
    - Palidroma
        - Chiedere all’utente di inserire una parola. 
        - Creare una funzione per capire se la parola inserita è palindroma.
Secondo esercizio:
    - Pari e Dispari
        - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
        - Genero un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
        - Sommo i due numeri. 
        - Stabilisco se la somma dei due numeri è pari o dispari (usando una funzione).
        - Dichiaro chi ha vinto.
*/
// 
// PRIMO ESERCIZIO: PALINDROMA
// 

// chiedo all'utente di digitare una parola tramite il prompt
// let parola1 = prompt('Digita una parola')
// // stampo in console la parola digitata
// console.log(parola1)

// creo la mia funzione che mi dirà se la parola inserita è palindroma oppure no
function findPalindrome(parola){
    // inizializzo l'array 1 vuoto
    let array1 = []
    // scorro le lettere della parola con un ciclo che le inserisce nell'array1 creato prima
    for(let i = 0; i < parola.length; i++){
        console.log(parola[i])
        array1.push(parola[i])
    }
   
    console.log(array1)
    // trasformo l'array1 in una stringa
    const stringa1 = array1.toString()
    console.log(stringa1)


    // inizializzo l'array2 vuoto
    let array2 = []
    // scorro le lettere della parola nel verso contrario con un ciclo che le inserisce nell'array2 creato prima
    for(let i = parola.length - 1; i >= 0; i--){
        console.log(parola[i])
        array2.push(parola[i])
    }
    
    console.log(array2)
    // trasformo l'array2 in una stringa
    const stringa2 = array2.toString()
    console.log(stringa2)

    // faccio il controllo con un if...else e stampo il risultato
    if(stringa1 == stringa2){
        const result1 = document.createElement('div')
        result1.innerHTML = '<h3 class="text-uppercase text-center text-success">é palindroma</h3>'
        document.querySelector('#container').appendChild(result1)
    } else{
        const result2 = document.createElement('div')
        result2.innerHTML = '<h3 class="text-uppercase text-center text-danger">non é palindroma</h3>'
        document.querySelector('#container').appendChild(result2)
    }
}


// prendo il pulsante invia e lo associo ad una variabile
const button = document.querySelector("#buttonSent")

// associo al click del pulsante la funzione che verifica se la parola digitata è palindroma dando come parametro il valore digitato nell'input
button.addEventListener('click', function(){
    //associo ad una costante la parola che l'utente digita nell'input
    let parolaUtente = document.querySelector("#parolaUtente").value
    // stampo il risultato a seconda che la funzione creata in precedenza restituisca un risultato vero o falso
    findPalindrome(parolaUtente)
}
)

// prendo il pulsante refresh e lo associo ad una variabile
const buttonRefresh = document.querySelector('#buttonRefresh')
// associo al click del pulsante Refresh la funzione che effettua il refresh della pagina
buttonRefresh.addEventListener('click', function(){
    window.location.reload();
})


// 
// SECONDO ESERCIZIO: PARI E DISPARI
// 




