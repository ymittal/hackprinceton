import './db'

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

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

      for (let i = 0; i < user.groups.length; i++) {
        const group = user.groups[i]
        const donations = await Donation.find({groupAssociated: group._id})
        group.total = donations.reduce((prev, cur) => {
          return prev + cur.amount
        }, 0)
      }

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
      const groups = await Group.find({})

      for (let i = 0; i < groups.length; i++) {
        const group = groups[i]
        const donations = await Donation.find({groupAssociated: group._id})
        group.total = donations.reduce((prev, cur) => {
          return prev + cur.amount
        }, 0)
      }

      res.send(groups)
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
