var http = require('http');
var fs = require('fs');

//1. 정적 파일 요청 처리 : fs.read() 활용
// var server = http.createServer(function(req, res){
//     console.log('req.url : ', req.url);
//     if(req.url === '/'){
//         fs.readFile('./index.html', function(err, data){
//             res.end(data);
//         });
//     }else if(req.url === '/iu.png'){
//         res.setHeader('Content-Type', 'image/png');
//         fs.readFile('./iu.png', function(err, data){
//             res.end(data);
//         });
//     }else if(req.url === '/music.mp3'){
//         res.setHeader('Content-Type', 'audio/mpeg');
//         fs.readFile('./muisc.mp3', function(err, data){
//             res.end(data);
//         });
//     }else if(req.url === '/streaming.mp4'){
//         res.setHeader('Content-Type', 'video/mp4');
//         fs.readFile('./streaming.mp4', function(err, data){
//             res.end(data);
//         });
//     }else if(req.url === 'favicon.ico'){}
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

//2. 정적 파일 요청 처리: 스트림 활용
// var server = http.createServer(function(req, res){
//     console.log('req.url : ', req.url);
//     if(req.url === '/'){
//         fs.createReadStream('/index.html').pipe(res);
//     }else if(req.url === '/iu.png'){
//         res.setHeader('Content-Type', 'image/png');
//         fs.createReadStream('/iu.png').pipe(res);
//     }else if(req.url === '/music.mp3'){
//         res.setHeader('Content-Type', 'audio/mpeg');
//         fs.createReadStream('/music.mp3').pipe(res);
//     }else if(req.url === '/streaming.mp4'){
//         res.setHeader('Content-Type', 'video/mp4');
//         fs.createReadStream('/streaming.mp4').pipe(res);
//     }else if(req.url === 'favicon.ico'){}
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

// process.on('unhandledRejection', (err) => {
//     console.log('err');
// });

//3. 정적 파일 요청 처리 : path, myMime
const http = require('http');
const fs = require('fs');

// const path = require('path');
// const myMime = require('./myMIME');

// const server = http.createServer((req, res) => {
//   console.log('req.url: ', req.url);
//   if (req.url === '/favicon.ico') {
//     res.end();
//     return;
//   }

//   if (req.url === '/') {
//     req.url = '/index.html';
//   }

//   const filePath = path.join(__dirname, req.url); // 파일에 대한 전체 경로
//   const extension = path.extname(filePath).substring(1); // 확장자 추출
//   const mimeType = myMime[extension];
//   console.log(filePath);
//   console.log(extension);
//   console.log(mimeType);

//   // fs.readFile로 서비스
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.log('fs.readFile error');
//       res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
//       res.end(`<h1>file open 에러</h1>
//               <p>${err.message}</p>`);
//       return;
//     }
//     res.writeHead(200, { 'Content-Type': mimeType });
//     res.end(data);
//   });

//   // stream으로 서비스
//   fs.open(filePath, 'r', (err, fd) => {
//     if (err) {
//       console.log('fs.open() error');
//       res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8'});
//       res.end(`<h1>file open 에러</h1>
//               <p>${err.message}</p>`);
//     } else {
//       res.writeHead(200, { 'Content-Type': mimeType });
//       fs.createReadStream(filePath).pipe(res);
//     }
//   });
// }).listen(8080, () => {
//   console.log('8080 포트에서 대기중');
// });

// 4. 정적 파일 요청 처리 : mime
var mime = require('mime');

var server = http.createServer(function(req, res){
    console.log('req.url : ', req.rul);
    if(req.url === 'favicon.ico'){
        res.end();
        return;
    }

    if (req.url === '/'){
        req.url = '/index.html';
    }
    var filePath = __dirname + req.url;
    var mimeType = mime.getType(filePath);
    console.log(filePath);
    console.log(mimeType);

    fs.open(filePath, 'r', function(err){
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end(`<h1>file open errer</h>
                    <p>${err.message}</p>    
            `)
        }else{
            res.writeHead(200, {'Content-Type' : mimeType});
            fs.createReadStream(filePath).pipe(res);
        }
    });

}).listen(8080, function(){
    console.log('8080포트에서 대기중');
});