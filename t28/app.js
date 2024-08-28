var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var person = {
        firstname: 'Arina',
        lastname: 'Vasileva'
    };

    res.end(JSON.stringify(person));
}).listen(3000, function() {
    console.log('Server is running on port 3000');
});
