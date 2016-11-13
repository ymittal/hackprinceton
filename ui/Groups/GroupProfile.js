import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Pie} from 'react-native-pathjs-charts'
import LinearGradient from 'react-native-linear-gradient'
import {orange, gradientBottom, gradientTop} from '../colors'
import {baseUrl} from '../../constants'

export default class GroupProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
  }

  componentWillMount () {
    fetch(`${baseUrl}/groups?theme=${this.props.theme}`).then((res) => res.json())
      .then((res) => {
        this.setState({data: res})
      })
      .catch((err) => {
        console.log(err)
      })

    // this.setState({
    //   data: [
    //     {
    //       name: 'Alice',
    //       amount: 14.40
    //     },
    //     {
    //       name: 'Bob',
    //       amount: 5.00
    //     },
    //     {
    //       name: 'Charlie',
    //       amount: 8.00
    //     },
    //     {
    //       name: 'David',
    //       amount: 5.34
    //     }
    //   ]
    // })
  }

  render () {
    const chartProps = {
      accessorKey: 'amount',
      data: this.state.data,
      options: {
        width: 400,
        height: 400,
        center: [200, 200],
        color: '#F09133',
        r: 1,
        R: 125,
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: true,
          color: '#ECF0F1'
        }
      }
    }

    const current = this.state.data.reduce((prev, cur) => {
      return prev + cur.amount
    }, 0)

    const users = this.state.data.map((user, i) => {
      return <Text key={i} style={styles.text}>{user.name}</Text>
    })

    return (
      <LinearGradient colors={[gradientTop(), gradientBottom()]} style={styles.container}>
        <Text style={styles.mission}>{this.props.mission}</Text>
        <Pie {...chartProps} />
        <Text style={styles.progress}>${current.toFixed(2)}/${this.props.goal}</Text>
        <View style={styles.userlist}>{users}</View>
      </LinearGradient>
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
  mission: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: -44
  },
  progress: {
    fontSize: 22,
    marginTop: -44,
    marginBottom: 22,
    backgroundColor: 'transparent',
    color: 'white'
  },
  userlist: {

  },
  text: {
    backgroundColor: 'transparent',
    color: 'white'
  }
})

