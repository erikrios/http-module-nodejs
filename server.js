var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(request.url, true).query;
    var txt = 'Kata kunci: ' + q.keyword;
    response.end(txt);
});

server.listen(3000);

console.log('Server running on http://localhost:3000');