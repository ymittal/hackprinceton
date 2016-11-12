import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Bar as ProgressBar} from 'react-native-progress'
import GroupList from '../components/GroupList'
import {blue} from '../colors'

export default class Groups extends React.Component {
  render () {
    const progressProps = {
      progress: 0.4,
      color: blue(),
      borderColor: blue(),
      height: 30
    }

    return (
      <View style={styles.container}>
        <View style={styles.progress}>
          <ProgressBar {...progressProps} />
        </View>
        <GroupList showGroup={this.props.showGroup} url={`/groups?username=${this.props.username}`} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  progress: {
    paddingTop: 40,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
