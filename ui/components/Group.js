import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class Group extends React.Component {
  render () {
    return (
      <View style={styles.container}>
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
    height: 60,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    justifyContent: 'center',
    paddingLeft: 12,
    marginBottom: 4,
    borderRadius: 2
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  mission: {
    marginLeft: 4
  }
})
