import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class Group extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
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
    alignItems: 'center'
  }
})
