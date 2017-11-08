/* Mini-jeu de rôle */

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());


//var personnage = {
//	nom: "Aurora",
//	sante: 150,
//	force: 25,
//	xp: 0
//};
//
//
//function decrire(personnage) {
//	var description = personnage.nom + " à " + personnage.sante + " PV et " + personnage.force + " en force et " + this.xp + " XP.";
//	return description;
//}
//
//console.log(decrire(personnage));
////console.log(decrire(personnage));
////console.log(personnage.nom + " à " + personnage.sante + " PV et " + personnage.force + " en force");
//
//// Aurora est blessée par une flèche
//personnage.sante = personnage.sante - 20;
//
//// Aurora obtient 'Bracelet de force'
//personnage.force = personnage.force + 10;
//
//// Aurora gagne de l'XP
//personnage.xp = personnage.xp + 5;
//
//console.log(decrire(personnage));
////console.log(decrire(personnage));
////console.log(personnage.nom + " à " + personnage.sante + " PV et " + personnage.force + " en force");
//
//// Aurora apprend une nouvelle compétence
//personnage.xp = personnage.xp + 10;
//
//console.log(decrire(personnage));
