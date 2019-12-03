var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('dramaList.db');

// 순차적으로 실행되도록 함.
db.serialize(function(){ // 무거운 작업은 비동기로 실행
    // 테이블 생성
    db.run(`CREATE TABLE dramaTable (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        actor TEXT NOT NULL
    )`, function(err){
        if(err){
            console.log(err.message);
        }else{
            console.log('table created');
        }
    });

    // 데이터 추가
    db.run(`INSERT INTO dramaTable (title, actor) 
    VALUES ("나의 아저씨", "아이유")`, 
    function(err){
        if(err){
            console.log(err.message);
        }else{
            console.log('table inserted');
        }
    });

});