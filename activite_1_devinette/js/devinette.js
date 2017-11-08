/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nbr = 0;
var trouve = false

while (!trouve && nbr++ < 6) {
	var saisie = Number(prompt(" Saisissez une valeur !"));
	trouve = saisie === solution;
	if (!trouve) {
		alert(saisie + " est trop " + ((saisie < solution) ? "petit" : "grand") +
			"\nEssai N°" + nbr)
	}
}
if (trouve) {
	alert("Bravo ! La solution etait " + solution +
		"\nVous avez trouvé en " + nbr + " essai(s)");
} else {
	alert("Perdu... La solution etait " + solution);
}