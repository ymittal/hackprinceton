import React from 'react'
import TabBarView from './TabBarView'
import Groups from './Groups'
import Profile from './Profile'
import Suggested from './Suggested'

const labels = ['Suggested', 'Groups', 'Profile']

export default class TabView extends React.Component {
  render () {
    return (
      <TabBarView labels={labels}>
        <Suggested />
        <Groups showGroup={this.props.showGroup} />
        <Profile />
      </TabBarView>
    )
  }
}
