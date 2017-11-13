var express = require("express");
var session = require("cookie-session");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

var app = express();


// On utilise les sessions
app.use(session({secret: "todotopsecret"}))

// S'il n'yas pas de ToDolist dans la session,
// On en crée une vide sous forme d'array avant la suite
app.use(function(req, res, next) {
	if (typeof(req.session.todolist) == "undefined") {
		req.session.todolist = [];
	}
	next();
})

// On affiche la ToDolist et le formulaire
app.get("/todo", function(req, res) {
	res.render("todo.ejs", {todolist: req.session.todolist});
});

// On ajoute un élément à la TODolist
app.post("/todo/ajouter/",urlencodedParser, function(req, res) {
	if (req.body.newtodo != "") {
		req.session.todolist.push(req.body.newtodo);
	}
	res.redirect("/todo");
});

// Supprime un élément de la TODolist
app.get("/todo/supprimer/:id", function(req, res) {
	if (req.params.id != "") {
		req.session.todolist.splice(req.params.id, 1);
	}
	res.redirect("/todo");
})

.listen(8080);