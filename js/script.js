// Chiedere all’utente il cognome
do {
var cognomeUtente = prompt("Inserisci il tuo cognome")
} while (!isNaN(cognomeUtente));
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
listaCognomi.push(cognomeUtente);
// stampa la lista ordinata alfabeticamente
listaCognomi.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(listaCognomi);
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
for(var i = 0; i < listaCognomi.length; i++) {
document.getElementById("cognomi").innerHTML += "<li>" + listaCognomi[i] + "</li>";
};

var posizione = listaCognomi.indexOf(cognomeUtente);
console.log(posizione);
document.getElementById("posizione").innerHTML = posizione + 1;
