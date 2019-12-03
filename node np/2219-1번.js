var http = require('http');

http.createServer(function(require, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>hello hun</h1>')
}).listen(8080)