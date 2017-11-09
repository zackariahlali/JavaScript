/* Activité : gestion des contacts */

// TODO : complétez le programme

function afficherChoix() {
	console.log("\nBienvenue dans le gestionnaire des contacts");
	console.log("1: Lister les contacts");
	console.log("2: Ajouter les contacts");
	console.log("0: Quitter");
};

var contacts = [];

var contact = {
	// Initialise le contact de base
	initContact: function (nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},
	// Affiche les information contact
	afficherContact: function () {
		var info = "Nom : " + this.nom + "\t| Prénom : " + this.prenom;
		return info;

	},
	// Ajoute un contact
	ajouterContact: function (nom, prenom) {
		this.initContact(nom, prenom);
		contacts.push(this);
	},
};



var contact1 = Object.create(contact);
contact1.initContact("Lévisse", "Carole");
contacts.push(contact1);

var contact2 = Object.create(contact);
contact2.initContact("Nelsonne", "Mélodie");
contacts.push(contact2);


do {
	afficherChoix();
	var choix = Number(prompt("Choisissez une option"));
	switch (choix) {
		case 0:
			console.log("\nAu Revoir");
			break;
		case 1:
			for (var i = 0; i < contacts.length; i++) {
				console.log(contacts[i].afficherContact());
			}
			break;
		case 2:
			var nouveauNom = prompt("Saisissez le nom du nouveau contact");
			var nouveauPrenom = prompt("Saisissez le prénom du nouveau contact");

			var nouveauContact = Object.create(contact);
			nouveauContact.ajouterContact(nouveauNom, nouveauPrenom);
			console.log("Le contact " + nouveauNom + " " + nouveauPrenom + " a bien était ajouté !");
			break;
	}
} while (choix !== 0);
