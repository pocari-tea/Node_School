var static = require('node-static');

var file = new static.Server();

require('http').createServer(function(request,response){
    request.addListener('end', function () {
        file.server.serve(request, response, function (e, res) {
            if (e && (e.status === 404)) { // If the file wasn't found
                fileServer.serveFile('/not-found.html', 404, {}, request, response);
            }
        });
    }).resume();
}).listen(8080);