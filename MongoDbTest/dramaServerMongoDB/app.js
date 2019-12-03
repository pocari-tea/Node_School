var express = require('express');
var logger = require('morgan');
var favicon = require('serve-favicon');
const assert = require('assert');
var path = require('path');

var app = express();
const MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(favicon(apth.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

app.get('/', function(req, res){

});

app.listen(8080, function(){
    console.log('8080 포트에서 대기중');
})