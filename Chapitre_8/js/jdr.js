var Personnage = {
	// Initialise le Personnage
	initPerso: function (nom, sante, force) {
		this.nom = nom;
		this.sante = sante;
		this.force = force;
		// Gestion de l'inventaire
		this.inventaire = {
			or: 10,
			cles: 1
		};
	},
	// Attaque une cible
	attaquer: function (cible) {
		if (this.sante > 0) {
			var degats = this.force;
			console.log(this.nom + " attaque " + cible.nom + " et lui inflige " + degats + " poins de dégats.");
			cible.sante = cible.sante - degats;
			if (cible.sante > 0) {
				console.log(cible.nom + " à encore " + cible.sante + " PV ");
			} else {
				cible.sante = 0;
				console.log(cible.nom + " est mort !");
			}
		} else {
			console.log(this.nom + " est mort, il ne peut donc pa attaquer !");
		}
	}
};


var joueur = Object.create(Personnage);
// Initialise le joueur
joueur.initjoueur = function (nom, sante, force) {
	this.initPerso(nom, sante, force);
	this.xp = 0; // L'XP est toujours initialisé à 0
};

// Affiche les information du Personnage
joueur.decrire = function () {
	var information = this.nom + "\t| PV : " + this.sante + "\t| force : " + this.force + "\t| XP : " + this.xp + "\t| PO : " + this.inventaire.or + "\t| Clé(s) : " + this.inventaire.cles;
	return information;
};

// Combat un adversaire
joueur.combattre = function (adversaire) {
	this.attaquer(adversaire);
	if (adversaire.sante === 0) {
		console.log(this.nom + " à tué " + adversaire.nom + " et obtient " + adversaire.valeur + " point(s) d'XP, " + this.inventaire.or + " Piece(s) d'or et " + this.inventaire.cles + " Clé(s).");
		this.xp += adversaire.valeur;
		this.inventaire.or += adversaire.inventaire.or;
		this.inventaire.cles += adversaire.inventaire.cles;
	}
};


var adversaire = Object.create(Personnage);
// Initialise l'advervaisre
adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
	this.initPerso(nom, sante, force);
	this.race = race;
	this.valeur = valeur;
};

var joueur01 = Object.create(joueur);
joueur01.initjoueur("Aurora", 150, 25);

//var perso01 = Object.create(Personnage);
//perso01.nom = "Aurora";
//perso01.sante = 150;
//perso01.force = 25;

var joueur02 = joueur;
joueur02.initjoueur("Glacuis", 130, 35);

//var joueur02 = Object.create(joueur);
//joueur02.initjoueur("Glacuis", 130, 35);

console.log("Bienvenue dans ce jeu d'aventure! Voici nos courageux héros :");
console.log(joueur01.decrire());
console.log(joueur02.decrire());

var monstre = Object.create(adversaire);
monstre.initAdversaire("Zog", 40, 20, "orc", 10);

console.log("Un affreux monstre apparait, c'est un " + monstre.race + " du nom de " + monstre.nom);

monstre.attaquer(joueur01);
monstre.attaquer(joueur02);

joueur01.combattre(monstre);
joueur02.combattre(monstre);

console.log(joueur01.decrire());
console.log(joueur02.decrire());

//var perso02 = Object.create(Personnage);
//perso02.nom = "Glacuis";
//perso02.sante = 130;
//perso02.force = 35;
//perso02.mana = 20;

//console.log(perso01.decrire());
//console.log(perso02.decrire());