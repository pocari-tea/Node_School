
function hello(msg){
    console.log('hello ' + msg);
}

var si = setInterval(() => {
    console.log('interval');
}, 1500);

var st = setTimeout(hello, 2000, 'ldy');
console.log('%d end %s', 365, 'hi');
console.log('JSON %j', {one: 1, two: 2});
clearTimeout(st);
clearInterval(si);
console.log(__dirname);
console.log(__filename);