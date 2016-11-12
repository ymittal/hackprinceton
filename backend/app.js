require('./db')

var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

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
