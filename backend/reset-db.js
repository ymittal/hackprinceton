import './db'

import mongoose from 'mongoose'

const User = mongoose.model('User')
const Group = mongoose.model('Group')
const Donation = mongoose.model('Donation')

User.remove({}, function () {
  console.log('All users removed')
})
Group.remove({}, function () {
  console.log('All groups removed')
})
Donation.remove({}, function () {
  console.log('All donations removed')
})

mongoose.connection.close()
