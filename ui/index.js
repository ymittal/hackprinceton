import React from 'react'
import {StyleSheet, Navigator, Text, TouchableHighlight} from 'react-native'
import TabView from './TabView'
import GroupProfile from './Groups/GroupProfile'
import defaultStyles from './styles'
import {blue} from './colors'

export default class Main extends React.Component {
  renderScene (route, navigator) {
    if (route.index === 0) {
      return <TabView showGroup={this.showGroup.bind(this, navigator)} />
    } else {
      return <GroupProfile back={this.back.bind(this, navigator)} {...route.group} />
    }
  }

  showGroup (navigator, group) {
    navigator.push({
      group,
      index: 1
    })
  }

  back (navigator) {
    navigator.pop()
  }

  render () {
    return (
      <Navigator
        initialRoute={{index: 0}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                return route.index === 0 ? null
                  : (
                  <TouchableHighlight onPress={navigator.pop}>
                    <Text style={[defaultStyles.text, styles.text]}>Back</Text>
                  </TouchableHighlight>
                )
              },
              RightButton: (route, navigator, index, navState) => null,
              Title: (route, navigator, index, navState) => {
                return route.index === 0 ? null : <Text style={[defaultStyles.text, styles.text, styles.title]}>{route.group.theme}</Text>
              }
            }}
            style={styles.navBar}
          />
        }
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  navBar: {
    backgroundColor: blue(),
    height: 60,
    alignItems: 'center'
  }
})
