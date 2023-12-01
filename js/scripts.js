//km da percorere
let number_km = prompt ('inserire il numero di km da percorrere');
console.log('number_km', number_km, typeof number_km);

//cambiato il valore di number_km da string a number cosi che riesca a far il calcolo
/* let numberParse = parseInt (number_km);
console.log('numberParse', numberParse, typeof numberParse); */

//età del passegero
let age_person = prompt ('inserire qui la tua età');
console.log('age_person', age_person, typeof age_person);

//cambiato il valore di age_person da string a number cosi che riesca a far il calcolo
/* let ageParse = parseInt (age_person);
console.log('ageParse', ageParse, typeof ageParse); */

//prezzo del biglietto per km dandogli un nome di una variabile
const prezzo_km = 0.21;
console.log('prezzo_km', prezzo_km, typeof prezzo_km);

//calcolo con variabili per il preezzo finale del biglietto senza sconto
let prezzo_finale_senza_sconto = (number_km * prezzo_km);
console.log('prezzo_finale_senza_sconto', prezzo_finale_senza_sconto, typeof prezzo_finale_senza_sconto);

let discount_20 = ((prezzo_finale_senza_sconto * 20) / 100)
console.log('discount_20' , discount_20 , typeof discount_20);

let discount_40 = ((prezzo_finale_senza_sconto * 40) / 100)
console.log('discount_40' , discount_40 , typeof discount_40);

let prezzo20;

let prezzo40;

if ((age_person) < 18 ){

    prezzo20 = (prezzo_finale_senza_sconto - discount_20).toFixed(2);
    console.log(prezzo20 ,typeof prezzo20);

}else if ((age_person) > 65 ){

    prezzo40 = (prezzo_finale_senza_sconto - discount_40).toFixed(2);
    console.log(prezzo40);

}




