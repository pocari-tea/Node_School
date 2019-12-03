const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev')); // 로그 남기는 미들웨어 실행
app.use(express.static('public')); // 정적 파일 처리 미들웨어 실행
app.use(express.urlencoded({ extended: true })); // post 방식으로 넘어올 때 body 파싱

// HTML 템플릿 엔진 설정
app.set('view engine', 'pug');
app.set('views', './views');

// 드라마 리스트
const dramaList = [
  { title: '나의 아저씨', actor: '이선균, 아이유' },
  { title: '비밀의 숲', actor: '조승우, 배두나' },
];

app.post('/', function(req, res){
    if(req.body.title && req.body.actor){
        dramaList.push({title: req.body.title, actor: req.body.actor});
        res.redirect('/'); // get방식으로 root로 요청
    }else{
        res.render('dramaList', { title: 'Hello Dongyun', list: dramaList });
    }
});

app.get('/', (req, res) => {
  res.render('dramaList', { title: 'Hello Dongyun', list: dramaList });
});

app.listen(8080, () => {
  console.log('8080 포트에서 대기 중');
});