// var path = require('path');

// console.log('__dirname');
// console.log('__filename');

// console.log(path.dirname(__filename)); //디렉토리 경로
// console.log(path.extname(__filename)); //확장자
// console.log(path.basename(__filename)); //파일 이름
// console.log(path.sep); // 구분자
// console.log(path.parse(__filename));

// var creatPath = path.format();

// console.log(createPath);

var joinPath = path.join(
    __dirname, '..', path.sep, 'path.js'
    );
console.log(joinPath);