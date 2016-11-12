import React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import {Pie} from 'react-native-pathjs-charts'

export default class Profile extends React.Component {
  render () {
    const chartProps = {
      accessorKey: 'amount',
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
      ],
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

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#FFFCFF'}}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        <Pie {...chartProps} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 0, 0)'
  },
  chart: {
    backgroundColor: 'rgb(255, 0, 0)',
    height: 200,
    width: 200
  }
})

