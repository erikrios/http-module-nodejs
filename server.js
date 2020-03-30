var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('URL: ' + request.url);
    response.end();
});

server.listen(3000);

console.log('Server running on http://localhost:3000');