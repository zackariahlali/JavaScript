var app = require("express")(),
    server = require("http").createServer(app),
    io = require("socket.io").listen(server),
    ent = require("ent"),
    /* Permet de bloquer les caractére HTML */
    fs = require("fs");

// Chargement de la page HTML
app.get("/", function(req, res) {
    res.sendfile(__dirname + "/index.html");
});

io.sockets.on("connection", function(socket, pseudo) {
    // Des que le client renseigne son pseudo, on le stock en variable de session et on  informe les autres clients
    socket.on("nouveau_client", function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit("Connexion de " + pseudo);
    });

    //Dés que l'on reçoit un message, on récupére le pseudo de l'auteur, et on le transmet aux autres client
    socket.on("message", function(message) {
        message = ent.encode(message);
        socket.broadcast.emit("message", { pseudo: socket.pseudo, message: message });
    });
});

server.listen(8080);