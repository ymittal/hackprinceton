import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
  }

  componentWillMount () {
    this.setState({
      data: [
        {
          date: new Date(new Date() - 1000000),
          amount: 0.99
        },
        {
          date: new Date(new Date() - 900000),
          amount: 0.80
        },
        {
          date: new Date(new Date() - 800000),
          amount: 0.32
        },
        {
          date: new Date(new Date() - 700000),
          amount: 0.40
        },
        {
          date: new Date(new Date() - 600000),
          amount: 0.50
        },
        {
          date: new Date(new Date() - 500000),
          amount: 0.65
        }
      ]
    })
  }

  render () {
    const now = new Date()

    const chartProps = {
      type: 'line',
      data: [this.state.data.filter((data) => now - data.date < 2592000000).map((data) => {
        return [data.date / 86400000, data.amount]
      })],
      yAxisUseDecimal: true,
      style: styles.chart
    }

    return (
      <View style={styles.container}>
        {this.state.data[0] &&
          <Text>{now.getMilliseconds() - this.state.data[0].date.getMilliseconds()}</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chart: {
    backgroundColor: 'rgb(255, 0, 0)',
    height: 200,
    width: 200
  }
})

