import React from 'react'
import {StyleSheet, View} from 'react-native'
import Tab from './Tab'

export default class TabBarView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {selectedTab: 1}
  }

  setSelectedTab (index) {
    this.setState({selectedTab: index})
  }

  render () {
    const view = this.props.children[this.state.selectedTab]

    const tabs = this.props.labels.map((label, i) => {
      const tabProps = {
        onPress: this.setSelectedTab.bind(this, i),
        key: i,
        selected: this.state.selectedTab === i,
        label
      }

      return <Tab {...tabProps} />
    })

    return (
      <View style={styles.container}>
        <View style={styles.view}>
          {view}
        </View>
        <View style={styles.tabs}>
          {tabs}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  view: {
    flex: 20
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
})
