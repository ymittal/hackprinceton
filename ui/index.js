import React from 'react'
import {StyleSheet, Navigator, Text, TouchableHighlight} from 'react-native'
// import SocketIO from 'react-native-socketio'
// import Notification from './components/Notification'
import TabView from './TabView'
import GroupProfile from './Groups/GroupProfile'
import defaultStyles from './styles'
import {blue, gradientTop} from './colors'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
    // this.socket = new SocketIO('http://localhost:3000')
    // this.socket.on('payment', (amount) => {
    //   this.setState({open: true, amount})
    // })
  }

  // sendDonation (theme, amount) {
  //   fetch('/donations', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: 'user1',
  //       theme
  //     })
  //   })
  //   this.closeNotif()
  // }

  // closeNotif () {
  //   this.setState({open: false})
  // }

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
                  <TouchableHighlight underlayColor={gradientTop()} onPress={navigator.pop}>
                    <Text style={[defaultStyles.text, styles.text]}>Back</Text>
                  </TouchableHighlight>
                )
              },
              RightButton: (route, navigator, index, navState) => null,
              Title: (route, navigator, index, navState) => {
                return (
                  <Text style={[defaultStyles.text, styles.text, styles.title]}>
                    {route.index === 0 ? 'Kevin' : route.group.theme}
                  </Text>
                )
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
