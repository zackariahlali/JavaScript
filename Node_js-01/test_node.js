var express = require("express");

var app = express();

app.get("/compter/:nombre", function(req, res) {
	var noms = ["Robert", "Jacqui", "Michel"];
	res.render("page.ejs", {compteur: req.params.nombre, noms: noms});
});

app.get("/", function (req, res) {
	res.setHeader("Content-Type", "text/plain");
	res.end("Vous étes à l'acceuil");
});

app.get("/sous-sol", function (req, res) {
	res.setHeader("Content-Type", "text/plain");
	res.end("Vous étes dans la cave a vins, ces bouteilles sont à moi !");
});

app.get("/etage/:etagenum/chambre", function (req, res) {
	res.render("Chambre.ejs", {
		etage: req.params.etagenum
	});
});

app.use(function (req, res, next) {
	res.setHeader("Content-Type", "text/plain");
	res.send(404, "Page introuvable");
});

app.listen(8080);