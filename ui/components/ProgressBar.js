import React from 'react'
import {StyleSheet, View} from 'react-native'

export default class ProgressBar extends React.Component {
  render () {
    const fillStyle = StyleSheet.flatten([
      styles.fill,
      {flex: this.props.selected ? blue() : black()}
    ])

    return (
      <View>
        <View />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  fill: {

  },
  empty: {

  }
})
