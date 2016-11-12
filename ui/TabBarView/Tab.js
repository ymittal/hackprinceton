import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default class Tab extends React.Component {
  render () {
    const textStyle = StyleSheet.flatten([
      styles.text,
      {color: this.props.selected ? 'rgb(100, 175, 200)' : 'rgb(0, 0, 0)'}
    ])

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={textStyle}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // cursor: 'pointer',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {

  }
})
