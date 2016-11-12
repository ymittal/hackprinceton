//connecting mongoose

var mongoose = require('mongoose');

mongoose.connect('mongodb://piyushib:mongodb@ec2-54-196-207-87.compute-1.amazonaws.com:27017/admin');

//get notified if we connected successfully

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//reference to user schema
var userSchema = mongoose.Schema({
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
		type: mongoose.Schema.types.ObjectId,
		ref: 'Group'
	}]
})

//compiled schema into a model
var User = mongoose.model('User', userSchema);

// group schema
var groupSchema = new mongoose.Schema({
  users: [{type: Schema.Types.ObjectId, ref: 'userSchema'}],
  timeLeft: Number,
  goal: {
    type: Number,
    required: true
  }
  theme: {
    type: String,
    required: true
  }
  mission: String
});

var Group = mongoose.model('Group', groupSchema);

// donation schema
var donationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  }
  groupAssociated: [{
    type: Schema.Types.ObjectId, ref: 'group'
  }],
  userAssociated:[{
    type: Schema.Types.ObjectId, ref: 'user'
  }]
});

var Donation = mongoose.model('Donation', donationSchema);

//payments schema
var paymentSchema = new mongoose.Schema({
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
});

var Payment = mongoose.model('Payment', paymentSchema);
