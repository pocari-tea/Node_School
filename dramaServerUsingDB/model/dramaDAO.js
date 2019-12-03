const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'dramaListDB'; // Database Name

var db;

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client){
    db = client.db(dbName);
    db.dramaCol = db.collection('dramaCol');
});

// 드라마 리스트 제공
exports.dramaList = function(obj){
    db.dramaCol.find(obj.query).toArray(function(err, docs){
        if(err){
            console.log(err.message);
        }else{
            obj.callback(docs);
        }
    }); 
}

// 드라마 항목 추가
exports.insertDrama = function(insertData){
    db.dramaCol.insertOne({title: insertData.title, actor: insertData.actor},
        function(err, result){
            if(err){
                console.log(err.message);
            }else{
                console.log('data inserted');
            }
        });
}