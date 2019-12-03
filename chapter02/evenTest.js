process.addListener('exit', function(){
    console.log('process.addListener');
});

process.on('exit', ()=>
console.log('process.on'));

process.once('exit', ()=>
console.log('process.once'));

process.emit('exit')