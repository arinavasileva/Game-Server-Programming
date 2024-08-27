var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200,{'Content-type':'text/plain'});
    res.end("OMG!This is my first web server");

}).listen(1337, '127.0.0.1');