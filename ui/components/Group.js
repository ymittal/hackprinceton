import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class Group extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.time}>
          {this.props.timeLeft}
        </Text>
        <Text style={styles.name}>
          {this.props.name}
        </Text>
        <Text style={styles.mission}>
          {this.props.mission}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    justifyContent: 'center',
    marginBottom: 4,
    padding: 4,
    borderRadius: 2
  },
  time: {
    marginTop: -12,
    fontSize: 8
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12
  },
  mission: {
    fontSize: 12,
    marginLeft: 16
  }
})
