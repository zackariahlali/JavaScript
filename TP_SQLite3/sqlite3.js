/************************************/
/** Création d'une base Temporaire **/
/************************************/

//var sqlite3 = require("sqlite3");
//
//var db = new sqlite3.Database(":memory:");
//
//db.serialize(function () {
//	db.run("create table user (login, name)");
//
//	var stmt = db.prepare("insert into user values (?, ?)");
//	var user = [{
//			login: "pierre",
//			name: "Pierre"
//		},
//		{
//			login: "paul",
//			name: "Paul"
//		},
//		{
//			login: "jacques",
//			name: "Jacques"
//		}];
//	
//	for (var i in user) {
//		stmt.run(user[i].login, user[i].name);
//	}
//	
//	db.each("select login, name from user", function(err, row) {
//		console.log(row.login + "\t|\t" + row.name);
//	});
//});

/************************************/
/** Stocke la base dans un fichier **/
/************************************/
//
var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("sqlite02.db");

db.serialize(function () {
	db.run("create table if not exists log (date)");
	db.all("select date from log", function (err, rows) {
		if (rows.length == 0) {
			console.log("Premiére execution !");
		} else {
			for (var i in rows) {
				console.log(rows[i].date);
			}
		}
	});

	var date = new Date().toLocaleString();
	var stmt = db.prepare("insert into log values (?)");
	stmt.run(date);
});


