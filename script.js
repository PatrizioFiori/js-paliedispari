/* 
Chiedere all’utente di inserire una parola (prompt)
Creare una funzione per capire se la parola inserita è palindroma
(la funzione controllerà se la parola invertita è uguale al prompt inserito)

*/


console.log(parolaIsPalindromo(prompt("inserisci una parola per controllare se è un palindromo")));


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


let sceltaCorretta = false 
let sceltaGiocatore = ""
let sceltaPc = ""
let sceltaNumeroGiocatore
let sceltaNumeroPc 

while (!sceltaCorretta){
    sceltaGiocatore = prompt("pari o dispari?");
    sceltaNumeroGiocatore = parseInt(prompt("scegli un numero da 1 a 5"));
    sceltaGiocatore = sceltaGiocatore.toLowerCase()

    if ((sceltaGiocatore === "pari" || sceltaGiocatore === "dispari") && (sceltaNumeroGiocatore >= 1 && sceltaNumeroGiocatore <= 5)) {
    sceltaCorretta = true
    sceltaGiocatore == "pari" ? sceltaPc = "dispari" : sceltaPc = "pari"
} else {
    console.log("devi inserire pari o dispari e scegliere un numero da 1 a 5");  
}


}

console.log ("il giocatore sceglie: " + sceltaGiocatore)
console.log("il pc sceglie: " + sceltaPc);
console.log("il numero scelta dal giocatore è: " + sceltaNumeroGiocatore);


sceltaNumeroPc = rollDelPc()
console.log("il numero scelta dal pc è: " + sceltaNumeroPc);

console.log(chiVince(sceltaNumeroGiocatore, sceltaNumeroPc));




function chiVince (num1, num2) {
    let totale = num1 + num2
    console.log("La somma è: " + totale);

    if (totale % 2 === 0) {
        if (sceltaGiocatore === "pari") {
            console.log("Vince il giocatore con PARI");
        } else {
            console.log("Vince il PC con PARI");
        }
    } else {
        if (sceltaGiocatore === "dispari") {
            console.log("Vince il giocatore con DISPARI");
        } else {
            console.log("Vince il PC con DISPARI");
        }
    }
}


function rollDelPc (){
     let sceltaPc = Math.floor(Math.random() * 6) + 1;
     return sceltaPc
 }
