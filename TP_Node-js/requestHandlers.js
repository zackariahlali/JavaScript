var exec = require("child_process").exec;

function start(res) {
    console.log("Le gestionnaire 'START' est appelé");
    exec("find /",
        { timeout: 10000, maxBuffer: 20000 * 1024 },
        function (error, stdout, stderr) {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write(stdout);
            res.end();
        });
}

function upload(res) {
    console.log("Le gestionnaire 'UPLOAD' est appelé");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Bienvenue sur la page 'UPLOAD' !");
    res.end();
}

exports.start = start;
exports.upload = upload;