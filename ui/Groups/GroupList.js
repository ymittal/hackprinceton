import React from 'react'
import {StyleSheet, View} from 'react-native'
import Group from '../components/Group'
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
          mission: 'clean water'
        },
        {
          name: 'Suh Dudes',
          timeLeft: 10,
          mission: 'poverty'
        },
        {
          name: 'Hey Man',
          timeLeft: 4,
          mission: 'healthcare'
        },
        {
          name: 'Dats Cool',
          timeLeft: 183,
          mission: 'breast cancer'
        }
      ]
    })
  }

  render () {
    const groups = this.state.groups.map((group, i) => {
      const {name, timeLeft, mission} = group
      const groupProps = {
        name,
        timeLeft,
        mission,
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
