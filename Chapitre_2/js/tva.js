/* Exercice : calculer un prix TTC à partir d'un prix HT */

// Saisie du prix hors taxes
var prixHT = Number(prompt("Entrez le prix HT :"));

// Calcul du prix TTC
var tauxTVA = 19.6 / 100;
var prixTTC = prixHT * (1 + tauxTVA);

// Affichage du résultat
alert( "Le prix TTC à régler est de : " + prixTTC + " euros");