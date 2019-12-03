var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('dramaList.db');

router.get('/', function(req, res){ // 클라이언트의 요청 메소드
    // db의 dramaTable;의 내용을 가져와 dramaList.pug 파일로 전달
    db.all(`SELECT * FROM dramaTable`, function(err, rows){
        if(err){
            console.log(err.message);
        }else{
            res.render('dramaList', {title: 'hun', list: rows});
        } 
    });
});

router.post('/', function(req, res){
    if(req.body.title && req.body.actor){
        db.run(`INSERT INTO dramaTable (title, actor) VALUES ($title, $actor)`,
        {
            $title: req.body.title,
            $actor: req.body.actor
        }, 
        function(err){
           if(err){
            console.log(err.message)
            }else{
                console.log('data inserted');
            }
        });
    }
    res.redirect('/'); // post redirect get (prg) 패턴
});

router.put('/', function(req, res){
    if(req.body.title && req.body.newTitle && req.body.newActor){
        db.run(`UPDATE dramaTable SET title = $newTitle, actor = $newAcotr WHERE title = $title`,
        {
            $newTitle: req.body.newTitle,
            $newAcotr: req.body.newActor,
            $title: req.body.title
        },
        function(err){
            if(err){
             console.log(err.message)
             }else{
                 console.log('data updated');
             }
         });
    }
    res.redirect('/');
});

router.delete('/', function(req, res){
    if(req.body.title){
        db.run(`DELETE FROM dramaTable WHERE title = $title`,
        {$title: req.body.title},
        function(err){
            if(err){
             console.log(err.message)
             }else{
                 console.log('data deleted');
             }
         });
    }
    res.redirect('/');
})

module.exports = router