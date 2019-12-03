const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

r1.on('line', function(input){
    console.log('input data: ', input);
});