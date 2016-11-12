import './db'

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

var app = express()
app.use(bodyParser.urlencoded({extended: false}))

const User = mongoose.model('User')
const Group = mongoose.model('Group')
const Donation = mongoose.model('Donation')

app.get('/users', (req, res, next) => {
  User.findOne({username: req.query.username}).populate('group', function (err, data, count) {
    if (err) next(err)
    else res.send(data)
  })
})

app.get('/groups', (req, res) => {})

app.post('/donations', (req, res) => {
  var donation = new Donation({
    amount: req.body.amount,
    user: req.body.userName,
    group: req.body.theme
  })

  donation.save((err) => {
    if (err) throw err

    console.log('Donation created!')
  })
})

app.use((err, req, res, next) => {
  console.log('error', err)
})

app.listen(8080, 'localhost', () => {
  console.log('App listening on http://localhost:8080')
})
