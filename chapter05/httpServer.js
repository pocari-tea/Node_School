var http = require('http');

// //1. http server 구동방법 1
// var server = http.createServer();

// server.on('request', function(request, response){
//     response.write('Welcome');
//     response.end(' to my server');
// });

// server.on('listening', function(){
//     console.log('8080 포트에서 대기중');
// });

// server.listen(8080);

//2. http server 구동방법 2
// var server = http.createServer(function(req, res){
//     res.write('Welcome');
//     res.end(' to my server');
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

//3. request, response 메시지 살펴보기
// var server = http.createServer(function(req, res){
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);
    
//     res.statusCode = 200;
//     res.setHeader('Context-Type', 'text/html');
//     res.writeHead(200, 'OKOK', {'Context-Type': 'text/plain', 'name': 'hun'});
//     res.write('<h1>hello world</h1>');
//     res.end('<h1>end</h1>');
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

//4. html 코드를 응답으로 보내기
// var server = http.createServer(function(req, res){
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Document</title>
//     </head>
//     <body>
//         <h1>Index HTML</h1>
//         <img src="http://image.yes24.com/goods/6772798/L">
//     </body>
//     </html>`);
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

//5. 파일을 응답으로 보내기
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile('./index.html', function(err,data){
        if(err){
            console.log(err);
            return;
        }
        res.end(data);
    });
}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});