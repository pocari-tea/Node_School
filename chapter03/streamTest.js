const fs = require('fs');

//1. Read Stream
//1-1 flowing mode
// const readStream = fs.createReadStream('./readme.txt'
// , {highWaterMark: 8});

// var data = [];
// readStream.on('data', function(chunk){
//     data.push(chunk);
//     console.log('chunk', chunk, chunk.length);
// })

// readStream.on('end', function(){
//     console.log('end: ', Buffer.concat(data))
// })

//2. paused mode
// const writeStream = fs.createWriteStream('./write.txt');
// process.stdin.on('readable', function(){
//     let chunk;
//     console.log('읽은 데이터가 있다.');
//     while((chunk = process.stdin.read()) != null){
//         writeStream.write(chunk);
//         if(chunk.toString() === 'exit\r\n')
//             break;
//     }
// });

// 2. writestream
// const writeStream = fs.createWriteStream('./write.txt');

// writeStream.on('finish', ()=>console.log('writeStream 완료'));

// writeStream.write('My\n');
// writeStream.write('name\n');
// writeStream.write('is\n');
// writeStream.write('Jeong Hun\n');
// writeStream.end();

//4. pipe
const readStream = fs.createReadStream('./write.txt');
const writeStream = fs.createWriteStream('./write2.txt');
readStream.pipe(writeStream);