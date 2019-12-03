const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var printHello = require('./practice04_module');


console.log('출력 횟수를 입력하세요');
rl.on('line', function(input){
    printHello(input);
    rl.close();
});