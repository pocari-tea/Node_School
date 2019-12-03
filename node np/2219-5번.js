var fs = require('fs');

fs.writeFile('./async.txt', '2학년 2반 19번 정훈'
, function(err)
{
    if(err){
        console.log(err);
    }
});

fs.readFile('./async.txt', 'utf8', 
function(err, data){
    if(err){
        console.log('readFile error');
    }else{
        console.log(data);
    }
});