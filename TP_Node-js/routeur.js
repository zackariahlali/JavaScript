function route(handl, pathname, res) {
    console.log("Début du traiteement de l'URL " + pathname + " !");
    if (typeof handl[pathname] === "function") {
        handl[pathname](res);
    } else {
        console.log("Aucun gestionnaire associé à " + pathname + ' !');
        res.writeHead(404, { "Content-Type": "tect/plain" });
        res.write("404 NOT FOUND");
        res.end();
    }
}

exports.route = route;
