import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
// import {Bar as ProgressBar} from 'react-native-progress'
import LinearGradient from 'react-native-linear-gradient'
import GroupList from '../components/GroupList'
import ProgressBar from './ProgressBar'
import {orange, gradientBottom, gradientTop} from '../colors'
import {baseUrl} from '../../constants'
import defaultStyles from '../styles'

export default class Groups extends React.Component {
  constructor (props) {
    super(props)
    this.state = {user: false}
  }

  componentWillMount () {
    console.log('fetch')
    fetch(`${baseUrl}/users?username=${this.props.username}`).then((res) => res.json())
      .then((res) => {
        console.log('done', res)
        this.setState({user: res})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    if (!this.state.user) {
      return <View />
    }

    console.log('render')

    return (
      <LinearGradient colors={[gradientTop(), gradientBottom()]} style={styles.container}>
        <View style={styles.progress}>
          <ProgressBar progress={this.state.user.total / 50} />
          <View style={styles.progressText}>
            <Text style={[defaultStyles.highlightedText, styles.total]}>
              ${this.state.user.total.toFixed(2)}
            </Text>
            <Text style={[defaultStyles.text, styles.goal]}>
              &nbsp;/ $50
            </Text>
          </View>
        </View>
        <GroupList showGroup={this.props.showGroup} groups={this.state.user.groups} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
    backgroundColor: 'transparent'
  },
  progress: {
    paddingTop: 70,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  total: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  goal: {
    fontSize: 25
  }
})
