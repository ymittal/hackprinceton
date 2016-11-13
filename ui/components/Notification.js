import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class Notification extends React.Component {
  render () {
    const modalStyle = StyleSheet.flatten([
      styles.modal,
      {display: this.props.open ? 'block' : 'none'}
    ])

    return (
      <View style={modalStyle}>
        <Text>{this.props.amount}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 30
  }
})
