<<<<<<< HEAD
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url,function(err,db) {
if(err) throw err;

var dbo = db.db("mydb2");

dbo.createCollection("customers",function(err,res){
if(err) throw err;
console.log("collection created");
db.close();

});


=======
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url,function(err,db) {
if(err) throw err;

var dbo = db.db("mydb2");

dbo.createCollection("customers",function(err,res){
if(err) throw err;
console.log("collection created");
db.close();

});


>>>>>>> fe42303a10bede8cf26c19467e36d49e397efa54
});