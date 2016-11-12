var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTestDB');
 
var db = mongoose.connection;
 
db.on('error', function (err) {
  	console.log('connection error', err);
});
db.once('open', function () {
  	console.log('connected.');
});

// hopefully we're fucking connected at this point

var collection = db.collection('payments');
 
// grab all the schemas just because lol

var Schema = mongoose.Schema;
var userSchema = mongoose.model('User').schema
var groupSchema = mongoose.model('Group').schema
var donationSchema = mongoose.model('Donation').schema

// list of names used to populate users table

var firsts = ["John", "Jane", "Jack", "Jill", "Bob", "Todd", "Brett", "Syd"];
var lasts = ["Bennet", "Morse", "Dawson", "Yang", "O'Donnel", "Shank", "Doering", "Sampson"];

// the stuff created by the Piyush

var User = mongoose.model('User');
var Group = mongoose.model('Group');
var Donation = mongoose.model('Donation');

// manually create five groups

var red = new Group({
	users : [],
	timeLeft : 12,
	goal: 90,
	theme: "Team Red",
	mission : "World Peace"
});

red.save(function (err, data) {
		if (err) console.log(err);
		else console.log('Saved ', data );
  	});

var white = new Group({
	users : [],
	timeLeft : 22,
	goal: 45,
	theme: "Team White",
	mission : "Clean Water"
});

white.save(function (err, data) {
		if (err) console.log(err);
		else console.log('Saved ', data );
  	});

var blue = new Group({
	users : [],
	timeLeft : 19,
	goal: 160,
	theme: "Team Blue",
	mission : "World Peace"
});

blue.save(function (err, data) {
		if (err) console.log(err);
		else console.log('Saved ', data );
  	});

var obama = new Group({
	users : [],
	timeLeft : 8,
	goal: 1000,
	theme: "Michelle Obama",
	mission : "Childhood Obesity"
});

obama.save(function (err, data) {
		if (err) console.log(err);
		else console.log('Saved ', data );
  	});

var nyc = new Group({
	users : [],
	timeLeft : 27,
	goal: 2000,
	theme: "New York City",
	mission : "NYC Homeless"
});

nyc.save(function (err, data) {
		if (err) console.log(err);
		else console.log('Saved ', data );
  	});

var groups = [red, white, blue, obama, nyc];
var users = [];
 
// build out eight users

for (var i = 0, len = firsts.length; i < len; i++) {
	var named = "user" + i;
  	var temp = new User({
  		username : named,
  		firstName : firsts[i],
  		lastName : lasts[i],
  		groups : groups
  	});

  	temp.save(function (err, data) {
		if (err) console.log(err);
		else console.log('Saved ', data );
  	});
  	users.push(temp);
}

var amounts = {0.01, 0.99, 0.12, 0.32, 0.45, 0.54, 0.64, 0.31, 0.85, 0.73, 0.93, 0.22, 0.16, 0.67, 0.81, 0.07, 0.38};

for (var i = 0, len = 200; i < len; i++) {
	var named = "don" + i;
	var temp = new Donation({
		amount : amounts[i % 17],
		groupAssociated: groups[i % 5],
		userAssociated: users[i % 8]
	});

	temp.save(function (err, data) {
		if (err) console.log(err);
		else console.log('Saved ', data );
  	});
}