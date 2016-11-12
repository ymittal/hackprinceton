import React from 'react'
import {StyleSheet} from 'react-native'
import TabBarView from './TabBarView'
import Groups from './Groups'
import Profile from './Profile'
import Suggested from './Suggested'

const labels = ['Suggested', 'Groups', 'Profile']

export default class Main extends React.Component {
  render () {
    return (
      <TabBarView labels={labels}>
        <Suggested />
        <Groups />
        <Profile />
      </TabBarView>
    )
  }
}
