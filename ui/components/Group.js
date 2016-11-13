import React from 'react'
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native'

export default class Group extends React.Component {
  render () {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.showGroup}>
        <View>
          <Text style={styles.time}>
            {this.props.timeLeft}
          </Text>
          <Text style={styles.theme}>
            {this.props.theme}
          </Text>
          <Text style={styles.mission}>
            {this.props.mission}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'black',
    justifyContent: 'center',
    marginBottom: 4,
    padding: 4,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  time: {
    marginTop: -12,
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
  }
})
