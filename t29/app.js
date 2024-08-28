var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/'){

        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);


    }else if(req.url === '/api'){

        res.writeHead(200,{'Content-type':'text/html'});
        var person = {

            firstname: 'Arina',
            lastname: 'Vasileva'
        };
        res.end(JSON.stringify(person));
    }

    

}).listen(1337, '127.0.0.1');