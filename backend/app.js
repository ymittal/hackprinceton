import './db'

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import socket from 'socket.io'
import http from 'http'

const io = socket(http.Server(express()))

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection',function(socket){
	console.log('We have user connected !')
// This event will trigger when any user is connected.
// You can use 'socket' to emit and receive events.
	socket.on('payment added',function(data){

		io.emit('payment request made');
// When any connected client emit this event, we will receive it here.
	});
});

var app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

const User = mongoose.model('User')
const Group = mongoose.model('Group')
const Donation = mongoose.model('Donation')

app.get('/users', async (req, res, next) => {
  try {
    if (req.query.username) {
      const user = await User.findOne({username: req.query.username}).populate('groups')
      const donations = await Donation.find({userAssociated: user._id})
      user.total = donations.reduce((prev, cur) => {
        return prev + cur.amount
      }, 0)

      res.send(user)
    } else {
      res.send(await User.find({}).populate('groups'))
    }
  } catch (e) {
    next(e)
  }
})

app.get('/groups', async (req, res, next) => {
  try {
    if (req.query.theme) {
      const group = await Group.findOne({theme: req.query.theme})

      const donations = await Donation.find({
        groupAssociated: group._id
      }).populate('userAssociated')

      const data = {}
      for (let i = 0; i < donations.length; i++) {
        const user = donations[i].userAssociated
        if (data.hasOwnProperty(user.firstName)) {
          data[user.firstName] += donations[i].amount
        } else {
          data[user.firstName] = donations[i].amount
        }
      }

      const arr = []
      Object.keys(data).forEach((user) => {
        arr.push({name: user, amount: data[user]})
      })

      res.send(arr)
    } else {
      res.send(await User.find({}))
    }
  } catch (e) {
    next(e)
  }
})

app.post('/donations', async (req, res, next) => {
  const user = await User.findOne({username: req.body.username})
  const group = await Group.findOne({theme: req.body.theme})

  var donation = new Donation({
    amount: req.body.amount,
    userAssociated: user._id,
    groupAssociated: group._id
  })

  try {
    await donation.save()
  } catch (e) {
    next(e)
  }
})

app.use((err, req, res, next) => {
  console.log('error', err)
})

app.listen(8080, () => {
  console.log('App listening on port', 8080)
})
