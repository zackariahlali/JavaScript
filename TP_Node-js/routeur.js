function route(handl, pathname, res, postData) {
    console.log("Début du traiteement de l'URL " + pathname + " !");
    if (typeof handl[pathname] === "function") {
        handl[pathname](res, postData);
    } else {
        console.log("Aucun gestionnaire associé à " + pathname + ' !');
        res.writeHead(404, { "Content-Type": "tect/plain" });
        res.write("404 NOT FOUND");
        res.end();
    }
}

exports.route = route;
