import React from 'react'
import {StyleSheet, View} from 'react-native'
import Group from './Group'

export default class GroupList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {groups: []}
  }

  componentWillMount () {
    console.log(this.props.url)
    fetch(this.props.url).then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.setState({groups: res.groups})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    const groups = this.state.groups.map((group, i) => {
      const {theme, timeLeft, mission, goal} = group
      const groupProps = {
        showGroup: this.props.showGroup.bind(null, group),
        theme,
        timeLeft,
        mission,
        goal,
        key: i
      }

      return <Group {...groupProps} />
    })

    return (
      <View style={styles.container}>
        {groups}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
})
