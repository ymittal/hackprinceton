import React from 'react'
import {StyleSheet, View} from 'react-native'
import Group from './Group'
import superagent from 'superagent'

export default class GroupList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {groups: []}
  }

  componentWillMount () {
    // superagent.get(`/groups?username=${this.props.user}`, (err, res) => {
    //   if (err) {

    //   } else {
    //     this.setState({groups: res.body})
    //   }
    // })
    this.setState({
      groups: [
        {
          name: 'Group 1',
          timeLeft: 5,
          mission: 'Clean Water',
          goal: 10
        },
        {
          name: 'Suh Dudes',
          timeLeft: 10,
          mission: 'Poverty',
          goal: 20
        },
        {
          name: 'Hey Man',
          timeLeft: 4,
          mission: 'Healthcare',
          goal: 10
        },
        {
          name: 'Dats Cool',
          timeLeft: 183,
          mission: 'Breast Cancer',
          goal: 300
        }
      ]
    })
  }

  render () {
    const groups = this.state.groups.map((group, i) => {
      const {name, timeLeft, mission, goal} = group
      const groupProps = {
        showGroup: this.props.showGroup.bind(null, group),
        name,
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
