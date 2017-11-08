/* Exercice Compte Bancaire */

var compte = {
	titulaire: "Alex",
	sold: 0,
	
	// Crediter le compte bancaire
	crediter: function(montant) {
		this.sold = this.sold + montant;
	},
	
	// debiter le compte bancaire
	debiter: function(montant) {
		this.sold = this.sold - montant;
	},
	
	// Information du compte bancaire
	decrire: function() {
		var info = "Titulaire : " + this.titulaire + " | sold : " + this.sold + " euros.";
		return info;
	}
}

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer sur le compte :"));
compte.crediter(credit);
console.log(compte.decrire());
var debit = Number(prompt("Entrez le montant à débiter du compte :"))
compte.debiter(debit);
console.log(compte.decrire());

