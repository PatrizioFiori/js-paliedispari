/* 
Chiedere all’utente di inserire una parola (prompt)
Creare una funzione per capire se la parola inserita è palindroma
(la funzione controllerà se la parola invertita è uguale al prompt inserito)

*/



console.log(parolaIsPalindromo(prompt("inserisci una parola")));


function parolaIsPalindromo (parolaUtente){
    let parolaInvertita = ""
for (let i = parolaUtente.length -1; i >= 0; i-- ){
    
    parolaInvertita += parolaUtente[i]
}

 parolaInvertita == parolaUtente ? console.log(`la parola ${parolaUtente} invertita è ${parolaInvertita} quindi è un palindromo`) : console.log(`la parola ${parolaUtente} invertita è ${parolaInvertita} quindi non è un palindromo`);

}


/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

