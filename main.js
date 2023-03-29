let Km = prompt("quanti chilometri vuole percorrere");
let Age = prompt("qunati anni hai?");

let Kmpercorsi = Km*0.21;

if(Age < 18){
    
    Kmpercorsi*0.6;

}else if(Age >= 65){

    Kmpercorsi*0.20;
}
alert("Il prezzo del tuo biglietto è di " + Kmpercorsi.toFixed(2) + " €");

