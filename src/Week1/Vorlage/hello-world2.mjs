import http from 'http';

http.createServer(function (req, res) {
    res.end(`requested${req.url}`);
}).listen(3000);

console.log('Server running at http://localhost:3000/');