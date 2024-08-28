var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    
    res.writeHead(200,{'Content-type':'text/html'});
    var person = {
        firstname: 'Arina',
        lastname: 'Vasileva'
        };

        res.end(JSON.stringify(person));

    }
