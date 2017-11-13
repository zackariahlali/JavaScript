//console.log("Premier test de code avec Node.js");

var http = require("http"); // Fait appel à http.js
var url = require("url"); // Fait appel à url.js

var querystring = require("querystring");

var server = http.createServer(function (req, res) {
	var params = querystring.parse(url.parse(req.url).query);
//	var page = url.parse(req.url).pathname;
//	console.log(page);
	res.writeHead(200, {"Content-Type": "text/plain"});
	if("prenom" in params && "nom" in params) {
		res.write("Vous etes Monsieur " + params["nom"] + " " + params["prenom"]);
	}
	else {
		res.write("vous n'etes pas enregistrer ici ?");
	}
	res.end();
});

server.listen(8080);

