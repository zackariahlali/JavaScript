/* Exercice : Analyse d'un mot */

// Renvoie le nombre de voyelle du mot
function CompterNbrVoyelles(mot) {
	var nbVoyelles = 0;
	for (var i = 0; i < mot.length; i++) {
		var lettre = mot[i].toLowerCase();
		if ((lettre === "a") || (lettre === "e") || (lettre === "i") ||
			(lettre === "o") || (lettre === "u") || (lettre === "y")) {
			nbVoyelles++;
		}
	}
	return nbVoyelles;
}

// Renvoie le mot inversé
function inverser(mot) {
	var motInverser = "";

	for (var i = mot.length - 1; i >= 0; i--) {
		motInverser = motInverser + mot[i];
	}
	return motInverser;
}

// Renvoie un mot converti en "leet speak"
function convertirEnLeetSpeek(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}

// Renvoie l'équivalent "leet speak" d'une lettre
function trouverLettreLeet(lettre) {
	// Par défaut, la lettre ne change pas
	var lettreLeet = lettre;
	switch (lettre.toLowerCase()) {
		case "a":
			lettreLeet = "4";
			break;
		case "b":
			lettreLeet = "8";
			break;
		case "c":
			lettreLeet = "(";
			break;
		case "d":
			lettreLeet = "[)";
			break;
		case "e":
			lettreLeet = "3";
			break;
		case "f":
			lettreLeet = "|=";
			break;
		case "g":
			lettreLeet = "6";
			break;
		case "h":
			lettreLeet = "#";
			break;
		case "i":
			lettreLeet = "1";
			break;
		case "j":
			lettreLeet = "_|";
			break;
		case "k":
			lettreLeet = "X";
			break;
		case "l":
			lettreLeet = "1";
			break;
		case "m":
			lettreLeet = "|v|";
			break;
		case "n":
			lettreLeet = "^/";
			break;
		case "o":
			lettreLeet = "0";
			break;
		case "p":
			lettreLeet = "|*";
			break;
		case "q":
			lettreLeet = "(_,)";
			break;
		case "r":
			lettreLeet = "2";
			break;
		case "s":
			lettreLeet = "5";
			break;
		case "t":
			lettreLeet = "7";
			break;
		case "u":
			lettreLeet = "(_)";
			break;
		case "v":
			lettreLeet = "\/";
			break;
		case "w":
			lettreLeet = "\/\/";
			break;
		case "x":
			lettreLeet = "><";
			break;
		case "y":
			lettreLeet = "7";
			break;
		case "z":
			lettreLeet = "≥";
			break;
	}
	return lettreLeet;
}

var saisi = prompt("Saisir un mot :")
var longueurMot = saisi.length;
var nbVoyelles = CompterNbrVoyelles(saisi);
var motInverser = inverser(saisi);
var motLeetSpeak = convertirEnLeetSpeek(saisi);

console.log("Le mot" + saisi + " contient " + longueurMot + " caratére(s).");
console.log("Il s'écrit en minuscule " + saisi.toLowerCase());
console.log("Il s'écrit en majuscule " + saisi.toUpperCase());

console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (longueurMot - nbVoyelles) + " consonne(s)");

console.log("Il s'écrit à l'envers " + inverser(saisi));
if (motInverser.toLowerCase() === saisi.toLowerCase()) {
	console.log("C'est un palindrome");
} else {
	console.log("Ce n'est pas un palindrome");
}

console.log("Il s'écrit en leet speak " + motLeetSpeak);
