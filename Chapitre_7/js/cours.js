var stylo = {
	type: "Bille",
	couleur: "Bleu",
	marque: "Bic"
};

// Constructeur MonObjet
function Monobjet() {
	// Initialisation de l'objet
	// ...
}
// Instanciation d'un objet a partir du constructeur
var monObj = new Monobjet();

console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "Bleu"
console.log(stylo.marque); // Affiche "Bic

/* Autre notation */
//console.log(stylo['type']); // Affiche "bille"
//console.log(stylo['couleur']); // Affiche "Bleu"
//console.log(stylo['marque']); // Affiche "Bic

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge"; // Modifie la propriété "ouleur" de l'objet stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.45; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " Euros");
