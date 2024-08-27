var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    res.writeHead(200,{'Content-type':'text/html'});
    
    
    var html = fs.readFileSync(__dirname+'/index.html','utf8');
    var message = "The day is ending soon.This is a final task for today! Yipeeee";
    html = html.replace('{Message}',message);

    res.end(html);

}).listen(1337, '127.0.0.1');