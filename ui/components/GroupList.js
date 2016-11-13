import React from 'react'
import {StyleSheet, View} from 'react-native'
import Group from './Group'

export default class GroupList extends React.Component {
  render () {
    const groups = this.props.groups.map((group, i) => {
      const groupProps = {
        showGroup: this.props.showGroup.bind(null, group),
        group,
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
