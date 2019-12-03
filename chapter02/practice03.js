// function add(a, b)
// {
//     console.log(a+b);
// }
// setTimeout(add, 1000, 1, 2);

// function addAsync(a, b, callback){
//     callback(err, result);
// } 
// addAsync(1, 2, function(result){
//     console.log(result);
// });
// var start = 1;
// var sync1 = function(param){return param*2;}
// var sync2 = function(param){return param*3;}
// var sync3 = function(param){return param*4;}

// console.log(sync3(sync2(sync1(start))));

// var async1 = function(param, callback){callback(param*2);}
// var async2 = function(param, callback){callback(param*3);}
// var async3 = function(param, callback){callback(param*4);}

// async1(start, function(result1){
//     async2(result1, function(result2){
//         require('fs').readFile('/readme.txt', 'utf9', function(err, data){
//             console.log(data);
//         });
//         async3(result2, function(result3){
//             console.log(result3);
//         });
//     });
// });

// var add = function (a, b) {callback(a + b);}

// console.log('before');
// add(1, 2);
// console.log('after');