// Create web server
const http = require('http');
const server = http.createServer(function(req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body "Hello World"
    res.end('Hello World\n');
});
server.listen(8081);
// Console will print the message
console.log('Server running at http://');