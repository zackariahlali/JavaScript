var http = require("http");
var url = require("url");

function start(route, handl) {
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("Requéte reçue pour l'adresse" + pathname + " !");
		route(handl, pathname, res);
	}
	http.createServer(onRequest).listen(8080);
	console.log("Demmarrage du serveur !");
}

exports.start = start;
