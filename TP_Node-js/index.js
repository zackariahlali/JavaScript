var serveur = require("./serveur");
var routeur = require("./routeur");
var requestHandlers = require("./requestHandlers");
var handl = {};

handl["/"] = requestHandlers.start;
handl["/start"] = requestHandlers.start;
handl["/upload"] = requestHandlers.upload;

serveur.start(routeur.route, handl)