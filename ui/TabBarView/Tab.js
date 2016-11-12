import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {blue, black} from '../colors'

export default class Tab extends React.Component {
  render () {
    const textStyle = StyleSheet.flatten([
      styles.text,
      {color: this.props.selected ? blue() : black()}
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
