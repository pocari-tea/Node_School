// //querystring으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기

var http = require('http');
var url = require('url');
var qeurystring = require('querystring');

// var server = http.createServer(function(req, res){
//   const parsedURL = url.parse(req.url);
//   //1. url을 parsing하여 객체로 저장한다. 
//   console.log('parsedURL.query : ', parsedURL.query);
//   const query = qeurystring.parse(parsedURL.query);
//   //2. parsedURL을 parsing하여 을 추출한 객체를 저장한다.
//   console.log('query : ', query);

//   // start와 end에 합계를 구할 범위를 저장한다.
//   let start = parseInt(query.start);
//   let end = parseInt(query.end);
//   //3. query.end를 정수로 parsing한다.
//   console.log(`start : ${start}, end : ${end}`);

//   if( !start || !end){
//     res.statusCode = 404;
//     res.end('Wrong Parameter');
//   }else{
//       var sum = 0;
//     for(var i=start; i<=end; i++ )
//         sum += i;
//     //4. start부터 end까지의 합계를 <h1>태그로 감싸서 출력한다. 
//     res.end("<h1>" + sum +  "</h1>")
//     console.log("sum: ",sum)
//   }
// }).listen(8080, function(){ });

// 2. POST 방식으로 처리
var server = http.createServer(function(req, res){
  if(req.method.toLowerCase() === 'post'){
    var body = '';

    req.on('data', function(chunk){
      body += chunk;
    });

    req.on('end', function(){
      var data = querystring.parse(body);
      var start = parseInt(data.start);
      var end = parseInt(data.end);
      console.log(`start : ${start}, end : ${end}`);

      if(!start || !end){
        res.end('잘못된 데이터...');

      }else{
        var sum = 0;
        for(var i=start; i<=end; i++)
          sum+= i;
      }
      res.end(`<h1>${sum}</h1>`)
    });

  }


}).listen(8080, function(){
  console.log('8080 포트에서 대기중');
});