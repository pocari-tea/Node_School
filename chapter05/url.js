//1. WHATWG 방식
const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string1&query=string2&query2=string3#hash');
// console.log(myURL);

// console.log(myURL.searchParams);
// console.log(myURL.searchParams.get('query'));
// console.log(myURL.searchParams.has('query2'));
// console.log(myURL.searchParams.getAll('query'));

// console.log(myURL.searchParams.keys());
// console.log(myURL.searchParams.values());


//2. 이전 방식 : require('url');
var url = require('url');
var parsedURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string1&query=string2&query2=string3#hash');
// console.log(parsedURL);
// console.log(url.parse(parsedURL).query);
// console.log(url.format(parsedURL));

//querystring
var querystring = require('querystring');
var query = querystring.parse(parsedURL.query);
console.log(query);

//단축 URL인 경우 WHATWG 방식은 에러가 발생함.
// const myURL = new URL('/?num1=1&num2=2');
var parsedURL2 = url.parse('/?num1=&num2=2');
console.log(parsedURL2);