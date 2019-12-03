var add = function (a, b, callback) {
    setTimeout(() => {
        callback(a+b);
    }, 1000);
}

console.log('before');
add(1, 2, function(result){
    console.log('sum: ' + result);
});
console.log('after');