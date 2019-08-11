var http = require ("http"),
    fs = require("fs");

fs.readFile("./flow.txt",function(err,txt) { 	
	http.createServer(function(req,res) {
		res.write(txt);
		res.end();
	}).listen(8080);
});
