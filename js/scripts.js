//km da percorere
let number_km = prompt ('inserire il numero di km da percorrere');
console.log('number_km', number_km, typeof number_km);

//età del passegero
let age_person = prompt ('inserire qui la tua età');
console.log('age_person', age_person, typeof age_person);

//prezzo del biglietto per km dandogli un nome di una variabile
const prezzo_km = 0.21;
console.log('prezzo_km', prezzo_km, typeof prezzo_km);

//calcolo con variabili per il preezzo finale del biglietto senza sconto
let prezzo_finale_senza_sconto = (number_km * prezzo_km).toFixed(2);
console.log('prezzo_finale_senza_sconto', prezzo_finale_senza_sconto, typeof prezzo_finale_senza_sconto);

//operazione per vedere il prezzo scontato da togliere al prezzo finale
let discount_20 = ((prezzo_finale_senza_sconto * 20) / 100)
console.log('discount_20' , discount_20 , typeof discount_20);

//operazione per vedere il prezzo scontato da togliere al prezzo finale
let discount_40 = ((prezzo_finale_senza_sconto * 40) / 100)
console.log('discount_40' , discount_40 , typeof discount_40);

//nome variabile per il prezzo finale con lo sconto del 20%
let prezzo20;
//nome variabile per il prezzo finale con lo sconto del 40%
let prezzo40;

// eta < 18 e eta > 65
if ((age_person) < 18 ){

    prezzo20 = (prezzo_finale_senza_sconto - discount_20).toFixed(2);
    console.log(prezzo20 ,typeof prezzo20);
    document.getElementById('pippo').innerHTML = prezzo20

}else if ((age_person) > 65 ){

    prezzo40 = (prezzo_finale_senza_sconto - discount_40).toFixed(2);
    console.log(prezzo40);
    document.getElementById('pippo').innerHTML = prezzo40

}else {
    document.getElementById('pippo').innerHTML = prezzo_finale_senza_sconto
}







