import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import GroupList from './components/GroupList'

export default class Suggested extends React.Component {
  constructor (props) {
    super(props)
    this.state = {groups: []}
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
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Suggested Groups</Text>
        <GroupList showGroup={this.props.showGroup} url={`/groups?username=${this.props.username}&suggested=true`} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  }
})

