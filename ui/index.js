import React from 'react'
import {Navigator, Text, TouchableHighlight} from 'react-native'
import TabView from './TabView'
import GroupProfile from './Groups/GroupProfile'

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
                    <Text>Back</Text>
                  </TouchableHighlight>
                )
              },
              RightButton: (route, navigator, index, navState) => null,
              Title: (route, navigator, index, navState) => {
                return route.index === 0 ? null : <Text>{route.group.name}</Text>
              }
            }}
          />
        }
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    )
  }
}
