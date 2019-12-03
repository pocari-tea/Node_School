var fs = require('fs');
var path = require('path');

fs.writeFile('./practice.txt', 'This file is practice file.'
, function(err)
{
    if(err){
        console.log(err);
    }
    else{
        fs.readFile('./practice.txt', function(err,data){
            console.log(data.toString('utf8'));
        })
    }
});

fs.readdir('./', function(err, files){
    if(err){
        console.log(err);
    }else{
        for (var i = 0; i< files.length; i++){
            if(path.extname(files[i]) == '.txt')
                console.log(files[i]);
        }
    }
});
