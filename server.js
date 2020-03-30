var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write('{"message" : "Hello, World!"}');
    response.end();
});

server.listen(3000);

console.log('Server running on http://localhost:3000');