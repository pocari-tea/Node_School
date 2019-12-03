var fs = require('fs');

fs.writeFileSync('./sync.txt', '2학년 2반 19번 정훈');

try{
    var data = fs.readFileSync('./sync.txt', 'utf8');
    console.log(data)
} catch (error) {
    console.log('readFileSync error');
}