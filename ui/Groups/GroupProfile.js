import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Pie} from 'react-native-pathjs-charts'
import superagent from 'superagent'

export default class GroupProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
  }

  componentWillMount () {
    // superagent.get(`/groups?name=${this.props.name}`, (err, res) => {
    //   if (err) {

    //   } else {
    //     this.setState({users: res.body})
    //   }
    // })

    this.setState({
      data: [
        {
          name: 'Alice',
          amount: 14.40
        },
        {
          name: 'Bob',
          amount: 5.00
        },
        {
          name: 'Charlie',
          amount: 8.00
        },
        {
          name: 'David',
          amount: 5.34
        }
      ]
    })
  }

  render () {
    const chartProps = {
      accessorKey: 'amount',
      data: this.state.data,
      options: {
        width: 400,
        height: 400,
        center: [200, 200],
        color: '#2980B9',
        r: 1,
        R: 125,
        label: {
          fontFamily: 'Arial',
          fontSize: 13,
          fontWeight: true,
          color: '#ECF0F1'
        }
      }
    }

    const current = this.state.data.reduce((prev, cur) => {
      return prev + cur.amount
    }, 0)

    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
        <Pie {...chartProps} />
        <Text>${current.toFixed(2)}/${this.props.goal}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
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

