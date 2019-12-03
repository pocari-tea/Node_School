var fs = require('fs');

//3. 동기식 파일 읽기
try{
    var data = fs.readFileSync('./readme.txt', 'utf8');
    console.log(data)
} catch (error) {
    console.log('readFileSync error');
}

//4. 비동기식 파일 읽기
fs.readFile('./readme.txt', 'utf8', 
function(err, data){
    if(err){
        console.log('readFile error');
    }else{
        console.log(data);
    }
});

//3.동기식 파일 저장
fs.writeFileSync('./write.txt', 'Voluptate quis ea do dolor.');

//4. 비동기식 파일 저장
fs.writeFile('./write.txt', 'Veniam enim ex cillum tempor magna commodo quis occaecat.'
, function(err)
{
    if(err){
        console.log(err);
    }
    else{
        fs.readFile('./write.txt', function(err,data){
            console.log(data);
            console.log(data.toString('utf8'));
        })
    }
});

//5. 파일에 내용 추가하기
fs.appendFile('./write.txt', '\nHello', (err) => {});

//6. 파일 존재 여부 확인
fs.access('./write.txt', fs.F_OK | fs.R_OK, function(err){
    if(err){
        //에러 처리
    }
    else{
        //파일 내용 읽어오기

    }
});

//7. 디렉토리 생성
fs.mkdir('./testDir', (err) =>{});

//8. 디렉토리 파일 목록 읽기
fs.readdir('./', function(err, files){
    if(err){
        console.log(err);
    }
    console.log(files);
})