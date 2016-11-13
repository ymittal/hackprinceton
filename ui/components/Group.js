import React from 'react'
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native'
import defaultStyles from '../styles'
import {gradientTop} from '../colors'

export default class Group extends React.Component {
  render () {
    const {timeLeft, theme, mission, total, goal} = this.props.group
    console.log(total, goal)
    return (
      <TouchableHighlight underlayColor={gradientTop()} style={styles.touchable} onPress={this.props.showGroup}>
        <View style={styles.container}>
          <View style={styles.info}>
            <Text style={styles.time}>
              {timeLeft} days remaining
            </Text>
            <Text style={styles.theme}>
              {theme}
            </Text>
            <Text style={styles.mission}>
              {mission}
            </Text>
          </View>
          <View style={styles.progress}>
            <Text style={[defaultStyles.highlightedText, styles.total]}>${total.toFixed(2)}</Text>
            <Text style={[styles.goal]}>&nbsp;/ ${goal}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  touchable: {
    height: 72,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    padding: 4,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  container: {
    height: 72,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    marginTop: -5,
    fontSize: 8
  },
  theme: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12
  },
  mission: {
    fontSize: 12,
    marginLeft: 16
  },
  info: {
    height: 50,
    flex: 2
  },
  progress: {
    height: 72,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  total: {
    fontWeight: 'bold'
  },
  goal: {

  }
})
