const MongoClient = require('mongodb').MongoClient; //mongo 클라이언트 객체를 가지고옴
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'MongoDBTest';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName); // db 객체 연결
  const collection = db.collection('myCol'); // collection 객체 연결

  db.collection('myCol').find({}).toArray(function(err, docs){
      if(err){
          console.log(err.message);
      }else{
          console.log(docs);
      }
  });

  // = db.collection('myCol').insert()
//   collection.insertOne({hello: 'MongoDb'}, function(err, result){
//       if(err){
//           console.log(err.message);
//       }else{
//           console.log(result.ops);
//           collection.find({}).toArray(function(err, docs){
//               assert.equal(err, null);
//               console.log(docs);
//           });
//       }
//   });




  client.close();
});