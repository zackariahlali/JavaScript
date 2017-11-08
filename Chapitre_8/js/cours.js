var unObjet = {
	a: 2
};

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // affiche 2

// Crée encoreUnObjet avec unAutreObjet comme protoype
var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche Undefined  