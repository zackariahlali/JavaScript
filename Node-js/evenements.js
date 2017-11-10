var http = require("http");
var EventEmitter = require("events").EventEmitter;

var jeu = new EventEmitter;

jeu.on("gameover", function(message) {
	console.log(message);
});

jeu.emit("gameover", "Vous etes mort !");
var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end("Salut tout le monde !");
});

server.on("close", function() {
	console.log("Le serveur à fermé");
})

server.listen(8080);
server.close();