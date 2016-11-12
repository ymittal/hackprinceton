// connecting mongoose

import mongoose, {Schema} from 'mongoose'

mongoose.connect('mongodb://piyushib:mongodb@ec2-54-196-207-87.compute-1.amazonaws.com:27017/admin')

// get notified if we connected successfully

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', console.log.bind(console, 'Connection established'))

// reference to user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  }]
})

// compiled schema into a model
mongoose.model('User', userSchema)

// group schema
const groupSchema = new Schema({
  users: [{type: Schema.Types.ObjectId, ref: 'userSchema'}],
  timeLeft: Number,
  goal: {
    type: Number,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  mission: String
})

mongoose.model('Group', groupSchema)

// donation schema
const donationSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  groupAssociated: [{
    type: Schema.Types.ObjectId, ref: 'group'
  }],
  userAssociated: [{
    type: Schema.Types.ObjectId, ref: 'user'
  }]
})

mongoose.model('Donation', donationSchema)

// payments schema
const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  userAssociated: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  groupAssociated: {
    type: Schema.Types.ObjectId, ref: 'Group'
  }
})

mongoose.model('Payment', paymentSchema)
