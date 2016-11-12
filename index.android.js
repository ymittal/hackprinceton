import React from 'react'
import {AppRegistry} from 'react-native'
import Main from './ui'

export default class Project extends React.Component {
  render () {
    return <Main />
  }
}

AppRegistry.registerComponent('Project', () => Project)
