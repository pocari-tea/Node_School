var express = require('express');
var logger = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');
var app = express();

var dramaRouter = require('./routes/drama');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use('/', dramaRouter);

app.listen(8080,function(){
    console.log('8080 포트에서 대기중');
})