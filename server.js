var express = require('express');
var app = express();

// // 1. hello world 예제
// app.get('/', function(req,res){
//     res.send('Hello World');
// });

app.listen(8080, function(){
    console.log('8080포트에서 대기중');
})

// 2. 라우팅 처리
// app.get('/', function(req,res){
//     res.send('<h1>Get request</h1>');
// });

// app.post('/', function(req,res){
//     res.end('<h1>Post request</h1>');
// })

// app.get('/book', function(req,res){
//     res.send('Get a book');
// });
// app.post('/book', function(req,res){
//     res.send('Add a book');
// });
// app.put('/book', function(req,res){
//     res.send('Update a book');
// });
// app.delete('/book', function(req,res){
//     res.send('Delete a book');
// });

// app.route() 체인 라운트 핸들러
// app.route('/book')
//     .get(function(req,res){
//          res.send('Get a book');
//      })
//      .post(function(req,res){
//          res.send('Add a book');
//      })
//     .put(function(req,res){
//          res.send('Update a book');
//     })
//     .delete(function(req,res){
//          res.send('Delete a book');
//      });  // 중간 세미콜론은 넣지 않음

// 3. 미들웨어 사용(사용자 정의)
// Express는 HTTP 웹서버의 구조를 제공하고, 
// 미들웨어는 중간중간에 필요한 기능을 제공하는 함수의 연속이다.
function mw1(req, res, next){
    console.log('middle ware 1');
    next();
}
function mw2(req, res, next){
    console.log('middle ware 2');
    next();
}

app.use(mw1);
app.use(mw2); //순서가 중요

app.get('/', function(req,res){
    res.send('/');
}); //미들웨어

// 4. 미들웨어 사용(써드파티 미들웨어: 로깅, 정적 파일처리)
// var logger = require('morgan');

// app.use(logger('dev'));

// app.get('/', function(req, res){
//     res.send('/');
// });