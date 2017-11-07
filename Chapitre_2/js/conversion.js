/* Exercice : convertir des degrés celsius en fahrenheit */

var tempCel = Number( prompt( "Entrez une température en degrés celsius :" ));
var tempFar = tempCel * 9 / 5 + 32;
alert( tempCel + " °C = " + tempFar + " °F" );