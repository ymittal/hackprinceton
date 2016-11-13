import './db'

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const port = 8081

console.log('This works');

var app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

const User = mongoose.model('User')
const Group = mongoose.model('Group')
const Donation = mongoose.model('Donation')

// app.get('/groups', (req, res) => {})

app.get('/users', async (req, res, next) => {
  const query = {
    username: req.query.username || undefined
  }

  console.log('get users', query)
  try {
    res.send(await User.find(query))
  } catch (e) {
    next(e)
  }
})

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

app.listen(port, () => {
  console.log('App listening on port', port)
})
