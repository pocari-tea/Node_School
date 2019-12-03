var http = require('http');
var url = require('url');
var qs = require('querystring');

// 드라마 리스트
var dramaList = [
    {title: '나의 아저씨', actor: '이선균, 아이유'},
    {title: '비밀의 숲', actor: '조승우, 배두나'}
]

// // 1. get 방식 처리
// var server = http.createServer(function(req, res){
//     console.log('req.url : ', req.url);

//     // url 파싱 - query 추출
//     var parsedUrl = url.parse(req.url);
//     var query = qs.parse(parsedUrl.query);

//     // 드라마 리스트에 데이터 추가
//     if(query.title && query.actor){
//         addDramaItem(query, res);
//     }else{
//         // 클라이언트에게 전송
//         showDramaList(res);
//     }

// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

// function addDramaItem(query, res){
//     dramaList.push({title: query.title, actor: query.actor});
//     res.writeHead(302, {'Location': '/'});
//     res.end();
// }

function showDramaList(res){
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    res.write(`<html><body><h1>My Favorite Drama</h1><ul>`)
    // for(var i = 0; i < dramaList.length; i++){
    //     res.write(`<li>${dramaList[i].title}(${dramaList[i].actor})</li>`);
    // }
    dramaList.forEach(function(item){
        res.write(`<li>${item.title}(${item.actor})</li>`);
    });
    res.write(`</ul>`);
    res.write(`-------------------------------------------------------------------------------------
    <h3>드라마 추가</h3>
    <form method="POST" action="http://localhost:8080">
        <p>제목<input type="text" name="title"></p>
        <p>배우<input type="text" name="actor"></p>
        <input type="submit" value="드라마 추가">
    </form>`);
    res.end(`</ul></body></html>`);
}

// 2. post 방식으로 처리
const server = http.createServer((req, res) =>{
    // body에서 데이터 꺼내기
    if(req.method.toLowerCase() === 'post'){
        // 드라마 리스트에 추가하기
        addDramaItem(req, res);
    }else{
        // get인 경우 클라이언트로 드라마 리스트 전송
        showDramaList(res);
    }

}).listen(8080, ()=>{
    console.log('8080 포트에서 대기중');
});

function addDramaItem(req, res){
    let body = '';
        
        req.on('data', function(chunk){
            body += chunk;
        });
        req.on('end', function(){
            var query = qs.parse(body);
            dramaList.push({title: query.title, actor: query.actor});
            res.writeHead(302, {'Location': '/'});
            res.end();
        });
}