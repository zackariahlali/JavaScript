// TODO : ajoutez ici la définition de l'objet chien
var chien = {
	nom: "Crockdur",
	race: "mâtin de Naples",
	taille: 75,
	
	// Aboiement
	aboyer: function() {
		return "Grrr ! Grrr !";
	}
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());