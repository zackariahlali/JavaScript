var express = require("express");
var session = require("cookie-session");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

var app = express();


// On utilise les sessions
app.use(session({secret: "todotopsecret"}))

// S'il n'yas pas de ToDolist dans la session,
// On en crée une vide sous forme d'array avant la suite
.use(function(req, res, next) {
	if (typeof(req.session.todolist) == "undefined") {
		req.session.todolist = [];
	}
	next();
})

// On affiche la ToDolist et le formulaire
.get("/todo", function(req, res) {
	res.render("todo.ejs", {todolist: req.session.todolist});
})

// On ajoute un élément à la TODolist
.post("/todo/ajouter/",urlencodedParser, function(req, res) {
	if (req.body.newtodo != "") {
		req.session.todolist.push(req.body.newtodo);
	} else {
		throw "Le champ est vide !"
	}
	res.redirect("/todo");
})

// Supprime un élément de la TODolist
.get("/todo/supprimer/:id", function(req, res) {
	if (req.params.id != "") {
		req.session.todolist.splice(req.params.id, 1);
	} else {
		throw "Le champ est vide"
	}
	res.redirect("/todo");
})

.use(function (req, res, next) {
	res.setHeader("Content-Type", "text/plain");
	res.send(404, "Page introuvable");
})

.listen(8080);