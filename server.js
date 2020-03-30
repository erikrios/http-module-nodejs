var http = require('http');

var server = http.createServer(function (request, response) {
    response.end('Hi, selamat datang di Node.js');
});

server.listen(3000);

console.log('Server running on http://localhost:3000');