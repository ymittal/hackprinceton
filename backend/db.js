var mongoose = require('mongoose');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://piyushib:mongodb@ec2-54-196-207-87.compute-1.amazonaws.com:27017/admin';

var User = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	groups: [{
		type: mongoose.Schema.types.ObjectId,
		ref: 'Group'
	}]
})

var Group = mongoose.Schema({
	name: String,
	mission: String,
	users: [{type: mongoose.Schema.types.ObjectId}]
})

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    var collection = db.collection('payments');

    collection.find()

    // do some work here with the database.
    //Close connection
    db.close();
  }
});

/*	Server = mongo.Server,
  	Db = mongo.Db;

var serverInstance = new mongo.Server('localhost', 27017, {auto_reconnect: true});

var dbref = new mongo.Db('paymentsDB', serverInstance);

dbref.open(function(err,dbref){

});

dbref.collection('payment', function(err, collectionref) { 
    // this is an asynchroneous operation
});

var myDocs = [{"foo":"bar"}, {"foo":"bar2"}, {"foo":"bar3"}];
collectionref.insert(myDocs, function (err, result) {
    // this is an asynchroneous operation
});

var cursor = collectionref.find();
cursor.toArray(function(err,docs){

});*/