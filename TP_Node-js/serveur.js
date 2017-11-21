var http = require("http");
var sys = require("sys");
var formidable = require("formidable")

http.createServer(function (req, res) {
	if (req.url == "/upload" && req.method.toLowerCase() == "post") {

		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.write("Received Uploads:\n\n");
			res.end(sys.inspect({ fields: fields, files: files }));
		});
		return;
	}
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end()(
		'<form action="/upload" enctype="multipart/form-data" ' +
		'method="post">' +
		'<input type="text" name="title"><br>' +
		'<input type="file" name="upload" multiple="multiple"><br>' +
		'<input type="submit" value="Upload">' +
		'</form>'
	);
}).listen(8080);

exports.start = start;
