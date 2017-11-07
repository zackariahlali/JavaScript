/* Exercice : afficher le jour suivant */

var jour = prompt("Entrez un jour de la semaine :");

// Solution avec un if
if (jour === "lundi") {
    alert("Demain, nous serons mardi");
} else if (jour === "mardi") {
    alert("Demain, nous serons mercredi");
} else if (jour === "mercredi") {
    alert("Demain, nous serons jeudi");
} else if (jour === "jeudi") {
    alert("Demain, nous serons vendredi");
} else if (jour === "vendredi") {
    alert("Demain, nous serons samedi");
} else if (jour === "samedi") {
    alert("Demain, nous serons dimanche");
} else if (jour === "dimanche") {
    alert("Demain, nous serons lundi");
} else {
    alert("Jour non reconnu !");
}
