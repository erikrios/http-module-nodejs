var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    switch (request.url) {
        case '/about':
            response.write('This is about page.');
            break;
        case '/profile':
            response.write('This is profile page.');
            break;
        case '/product':
            response.write('This is product page.');
            break;
        default:
            response.write('404: Page not found.');
    }
    response.end();
});

server.listen(3000);

console.log('Server running on http://localhost:3000');