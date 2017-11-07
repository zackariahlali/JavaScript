/* Exercice : trouver le résultat au bac selon la moyenne */

var moyenne = Number(prompt("Entrez une moyenne de baccalauréat :"));

if (moyenne < 10) {
    alert("Le candidat est recalé");
} else if (moyenne < 12) { // 10 <= moyenne < 12
    alert("Le candidat est reçu");
} else { // moyenne >= 12
    alert("Le candidat est reçu avec mention");
}