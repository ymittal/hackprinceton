require('./db')

var express = require('express')
var bodyParser = require('body-parser')
var http    = require('http').Server(express());
var io      = require('socket.io')(http);
var mongoose = require('mongoose')

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection',function(socket){
	console.log('We have user connected !');
// This event will trigger when any user is connected.
// You can use 'socket' to emit and receive events.
	socket.on('payment added',function(data){

		io.emit('payment request made');
// When any connected client emit this event, we will receive it here.
	});
});

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

app.listen(8080, function () {
	console.log('App listening on http://localhost:8080')
})
