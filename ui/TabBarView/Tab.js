import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import defaultStyles from '../styles'
import {orange, blue, black, gradientTop} from '../colors'

export default class Tab extends React.Component {
  render () {
    const textStyle = StyleSheet.flatten([
      defaultStyles.text,
      {color: this.props.selected ? orange() : black()}
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
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: blue(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: gradientTop()
  }
})
