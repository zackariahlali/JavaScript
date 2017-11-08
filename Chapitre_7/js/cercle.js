var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle

var cercle = {
	rayon: r,

	// Calcule le périmetre
	perimetre: function () {
		return 2 * this.rayon * Math.PI;
	},
	aire: function () {
		return this.rayon * this.rayon * Math.PI;
	}
};


console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());