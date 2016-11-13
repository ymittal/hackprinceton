import React from 'react'
import TabBarView from './TabBarView'
import Groups from './Groups'
import Profile from './Profile'
import Suggested from './Suggested'

const labels = ['Suggested', 'Groups', 'You']

export default class TabView extends React.Component {
  render () {
    return (
      <TabBarView labels={labels}>
        <Suggested showGroup={this.props.showGroup} />
        <Groups showGroup={this.props.showGroup} username='user1' />
        <Profile username='user1' />
      </TabBarView>
    )
  }
}
