require('./db')

var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
	userName: String,
	firstName: String,
	lastName: String,
	groups: [{type: Schema.Types.ObjectId, ref: 'group'}],
});


var User = mongoose.model('User', userSchema);

var groupSchema = new mongoose.Schema({
	users: [{type: Schema.Types.ObjectId, ref: 'userSchema'}],
	timeLeft: Number,
	goal: Number,
	theme: String,
	mission: String
});

var donationSchema = new mongoose.Schema({
	amount: Number,
	groupAssociated: [{
		type: Schema.Types.ObjectId, ref: 'group'
	}]
	userAssociated:[{
		type: Schema:Types.ObjectId, ref: 'user'
	}]
});

var Group = mongoose.model('Group', groupSchema)

var Donation = mongoose.model('Donation', donationSchemas)

var app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(function (req, res, next) {
	req.hello = 'world'
	console.log(req.method + ' ' + req.path)
	next()
})

app.get('/users', function (req, res, next) {
	console.log(req.hello)
	User.findOne({username: req.query.username}).populate('group', function (err, data, count) {
		if (err) next(err);
		else res.send(data)
	})
})

app.get('/groups', function (req,res){

})

app.post('/donations', function (req,res){
	var donation = new Donation({
		amount: req.body.amount,
		user: req.body.userName,
		group: req.body.theme
	})

	donatione.save(function (err) {
		if (err) throw err;

		console.log('Donation created!')
	})
});

app.use(function (err, req, res, next) {
	console.log('error', err)
})

app.listen(8080, 'localhost', function () {
	console.log('App listening on http://localhost:8080')
})
