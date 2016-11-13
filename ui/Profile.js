import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import defaultStyles from './styles'
import {gradientBottom, gradientTop} from './colors'
import {baseUrl} from '../constants'

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {user: false}
  }

  componentWillMount () {
    fetch(`${baseUrl}/users?username=${this.props.username}`).then((res) => res.json())
      .then((res) => {
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

    return (
      <LinearGradient colors={[gradientTop(), gradientBottom()]} style={styles.container}>
        <View style={styles.view}>
          <Text style={[defaultStyles.text, styles.text]}>You've donated</Text>
          <Text style={[defaultStyles.highlightedText, styles.total]}>${this.state.user.total.toFixed(2)}</Text>
          <Text style={[defaultStyles.text, styles.text]}>that's enough to feed a small family for two days!</Text>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    marginTop: 40,
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  total: {
    fontSize: 30
  }
})

