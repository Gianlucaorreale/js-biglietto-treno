/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
1 - definire una variabile per il numero di kilometri che percorrerà il passeggero.
2 - definire una variabile per l'età del passeggero.
3 - definire una variabile per il prezzo del biglietto.
*/

const kilometers = parseInt (prompt ('Quanti Km vuoi percorrere?' , '1000'));
const age = parseInt (prompt('Quanti anni hai?' , '17'));
const ticketPrice = parseInt ('0.21' * kilometers);

console.log('scelta utente : ' +  kilometers);
console.log('anni utente : ' + age );
console.log('prezzo biglietto : ' + ticketPrice);