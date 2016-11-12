import './db'

import mongoose from 'mongoose'
// hopefully we're fucking connected at this point

// var collection = db.collection('payments')

async function main () {
  // list of names used to populate users table

  var firsts = ['John', 'Jane', 'Jack', 'Jill', 'Bob', 'Todd', 'Brett', 'Syd']
  var lasts = ['Bennet', 'Morse', 'Dawson', 'Yang', "O'Donnel", 'Shank', 'Doering', 'Sampson']

  // the stuff created by the Piyush

  var User = mongoose.model('User')
  var Group = mongoose.model('Group')
  var Donation = mongoose.model('Donation')

  // manually create five groups

  var red = new Group({
    users: [],
    timeLeft: 12,
    goal: 90,
    theme: 'Team Red',
    mission: 'World Peace'
  })

  await red.save()
  console.log('Saved group ', red)

  var white = new Group({
    users: [],
    timeLeft: 22,
    goal: 45,
    theme: 'Team White',
    mission: 'Clean Water'
  })

  await white.save()
  console.log('Saved group ', white)

  var blue = new Group({
    users: [],
    timeLeft: 19,
    goal: 160,
    theme: 'Team Blue',
    mission: 'World Peace'
  })

  await blue.save()
  console.log('Saved group ', blue)

  var obama = new Group({
    users: [],
    timeLeft: 8,
    goal: 1000,
    theme: 'Michelle Obama',
    mission: 'Childhood Obesity'
  })

  await obama.save()
  console.log('Saved group ', obama)

  var nyc = new Group({
    users: [],
    timeLeft: 27,
    goal: 2000,
    theme: 'New York City',
    mission: 'NYC Homeless'
  })

  await nyc.save()
  console.log('Saved group ', nyc)

  var groups = [red, white, blue, obama, nyc]
  var users = []

  // build out eight users

  for (var i = 0, len = firsts.length; i < len; i++) {
    var named = 'user' + i
    var temp = new User({
      username: named,
      firstName: firsts[i],
      lastName: lasts[i],
      groups: groups
    })

    const data = await temp.save()
    console.log('Saved user ', data, 'count: ', i)
    users.push(temp)
  }

  var amounts = [0.01, 0.99, 0.12, 0.32, 0.45, 0.54, 0.64, 0.31, 0.85, 0.73, 0.93, 0.22, 0.16, 0.67, 0.81, 0.07, 0.38]

  for (i = 0, len = 200; i < len; i++) {
    temp = new Donation({
      amount: amounts[i % 17],
      groupAssociated: groups[i % 5],
      userAssociated: users[i % 8]
    })

    const data = await temp.save()
    console.log('Saved donation ', data, 'count: ', i)
  }

  mongoose.connection.close()
}

main()
