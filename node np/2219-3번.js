var math = require('./2219-2번');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});

rl.on('line', function(input){    
    console.log('절댓값'+math(input))
});