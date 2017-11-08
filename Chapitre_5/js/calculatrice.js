// TODO : écrire la fonction calculer()

function calculer( a , operateur, b) {
	var rslt;
	switch(operateur) {
		case "+":
			rslt = a + b;
			break;
		case "-":
			rslt = a - b;
			break;
		case "*":
			rslt = a * b;
			break;
		case "/":
			rslt = a / b;
			break;
				 }
	return rslt;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity