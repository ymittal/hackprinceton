import React from 'react'
import {StyleSheet, View} from 'react-native'
import {orange} from '../colors'

export default class ProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {

  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  componentWillUpdate (nextProps, nextState) {

  }

  componentDidUpdate (prevProps, prevState) {

  }

  componentWillUnmount () {

  }

  render () {
    const barStyle = StyleSheet.flatten([
      styles.bar,
      {
        width: this.props.progress * 300
      }
    ])

    return (
      <View style={styles.container}>
        <View style={barStyle} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 250,
    borderRadius: 30,
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  bar: {
    height: 30,
    borderRadius: 30,
    backgroundColor: orange()
  }
})
