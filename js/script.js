// Chiedere all’utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log(cognomeUtente);
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(listaCognomi);
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

// stampa la lista ordinata alfabeticamente
listaCognomi.sort()
console.log(listaCognomi);

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
