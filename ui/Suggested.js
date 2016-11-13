import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import GroupList from './components/GroupList'
import defaultStyles from './styles'
import {gradientTop, gradientBottom} from './colors'
import {baseUrl} from '../constants'

export default class Suggested extends React.Component {
  constructor (props) {
    super(props)
    this.state = {groups: []}
  }

  componentWillMount () {
    fetch(`${baseUrl}/groups`).then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.setState({groups: res})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    return (
      <LinearGradient colors={[gradientTop(), gradientBottom()]} style={styles.container}>
        <Text style={[defaultStyles.text, styles.title]}>Suggested Groups</Text>
        <GroupList showGroup={this.props.showGroup} groups={this.state.groups} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 60,
    marginBottom: 20,
    fontWeight: 'bold'
  }
})

