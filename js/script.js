// Chiedere all’utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log(cognomeUtente);
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(listaCognomi);
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

// stampa la lista ordinata alfabeticamente

listaCognomi.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(listaCognomi);


// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

for(var i = 0; i < listaCognomi.length; i++) {
document.getElementById("cognomi").innerHTML += "<li>" + listaCognomi[i] + "</li>";
};
