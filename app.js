const http = require('http');

// Constants
const hostname = '0.0.0.0';
const port = 8080; //This is the same port that's being exposed by docker.

// Server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});