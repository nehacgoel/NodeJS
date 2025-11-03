//just a simple server to test on browser
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(3000);