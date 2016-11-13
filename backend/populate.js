import './db'

import mongoose from 'mongoose'

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
    mission: 'World Peace',
    description: 'We believe that local people have the power to find their own solutions to conflict – and to build their own better futures. Our mission is to help them make this happen. We are an international charity dedicated to supporting local peacebuilding.'
  })

  await red.save()
  console.log('Saved group ', red)

  var white = new Group({
    users: [],
    timeLeft: 22,
    goal: 45,
    theme: 'Team White',
    mission: 'Clean Water',
    description: 'Our mission is to creatively tackle water challenges of a rapidly changing world where water and climate interact with food, energy, ecosystems and urbanization. Combining the rigor of scientific research with the impact of effective policy, we aim to design reliable, sustainable models of water management and development that can be implemented on local, regional and global levels.'
  })

  await white.save()
  console.log('Saved group ', white)

  var blue = new Group({
    users: [],
    timeLeft: 19,
    goal: 160,
    theme: 'Team Blue',
    mission: 'Poverty',
    description: 'VillageReach: Since 2000, this organization has worked to improve the developing world’s access to healthcare by partnering with businesses, governments, nonprofits, and other organizations. They aim to strengthen local infrastructure in underserved rural areas, and facilitate the delivery of medical supplies. This effort specifically helps fight rural poverty by allowing remote communities to lead better, more fruitful lives.'
  })

  await blue.save()
  console.log('Saved group ', blue)

  var obama = new Group({
    users: [],
    timeLeft: 8,
    goal: 1000,
    theme: 'Michelle Obama',
    mission: 'Childhood Obesity',
    description: 'NCOF: To steadily improve the overall nutritional and kinesiology health care knowledge and decision-making processes for expecting parents, parents, grandparents, teachers, health care professionals, and the very youngest in society.'
  })

  await obama.save()
  console.log('Saved group ', obama)

  var nyc = new Group({
    users: [],
    timeLeft: 27,
    goal: 2000,
    theme: 'New York City',
    mission: 'NYC Homeless',
    description: 'Citymeals-on-Wheels: Volunteering at a soup kitchen over the holidays is a tradition in many families, but if you can\'t make it yourself, you can still help out. Give to City Meals on Wheels, a group with a network of 120 centers around the city serving mostly low-income, homebound people. Every bit of money you give them will be put toward meal preparation (they do not take food donations) and delivery.'
  })

  await nyc.save()
  console.log('Saved group ', nyc)

  var groups = [red, white, blue, obama, nyc]
  var users = []

  // build out eight users

  for (var i = 0, len = firsts.length / 2; i < len; i++) {
    var named = 'user' + i
    var temp = new User({
      username: named,
      firstName: firsts[i],
      lastName: lasts[i],
      groups: [red, blue, obama]
    })

    const data = await temp.save()
    console.log('Saved user ', data, 'count: ', i)
    users.push(temp)
  }

  for (var i = 4, len = firsts.length; i < len; i++) {
    var named = 'user' + i
    var temp = new User({
      username: named,
      firstName: firsts[i],
      lastName: lasts[i],
      groups: [white, nyc]
    })

    const data = await temp.save()
    console.log('Saved user ', data, 'count: ', i)
    users.push(temp)
  }

  var amounts = [0.01, 0.99, 0.12, 0.32, 0.45, 0.54, 0.64, 0.31, 0.85, 0.73, 0.93, 0.22, 0.16, 0.67, 0.81, 0.07, 0.38]

  for (i = 0, len = 200; i < len; i++) {
    const user = users[i % 8]
    temp = new Donation({
      amount: amounts[i % 17],
      groupAssociated: user.groups[i % user.groups.length],
      userAssociated: user
    })

    const data = await temp.save()
    console.log('Saved donation ', data, 'count: ', i)
  }

  mongoose.connection.close()
}

main()
