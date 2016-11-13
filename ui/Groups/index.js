import React from 'react'
import {StyleSheet, View} from 'react-native'
// import {Bar as ProgressBar} from 'react-native-progress'
import LinearGradient from 'react-native-linear-gradient'
import GroupList from '../components/GroupList'
import ProgressBar from './ProgressBar'
import {orange, gradientBottom, gradientTop} from '../colors'
import {baseUrl} from '../../constants'

export default class Groups extends React.Component {
  render () {
    const progressProps = {
      progress: 0.4,
      color: orange(),
      borderColor: orange(),
      backgroundColor: 'white',
      height: 30
    }

    return (
      <LinearGradient colors={[gradientTop(), gradientBottom()]} style={styles.container}>
        {/*
        <View style={styles.progress}>
          <ProgressBar {...progressProps} />
        </View>
        */}
        <View style={styles.progress}>
          <ProgressBar progress={0.6666} />
        </View>
        <GroupList showGroup={this.props.showGroup} url={`${baseUrl}/users?username=${this.props.username}`} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
    backgroundColor: 'transparent'
  },
  progress: {
    paddingTop: 50,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
