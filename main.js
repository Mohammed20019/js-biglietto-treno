let Km = prompt("quanti chilometri vuole percorrere");
let Age = prompt("qunati anni hai?");

let Kmpercorsi = Km*0.21;

if(Age < 18){
    
    Kmpercorsi*0.8;

}else if(Age >= 65){

    Kmpercorsi*0.6;
}
alert("Il prezzo del tuo biglietto è di " + Kmpercorsi.toFixed(2) + " €");
console.log(`il prezzo del biglietto ${Kmpercorsi} €`)

