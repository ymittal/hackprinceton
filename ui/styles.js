import {StyleSheet} from 'react-native'
import {orange} from './colors'

export default StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'Avenir'
  },
  highlightedText: {
    backgroundColor: 'transparent',
    color: orange(),
    fontFamily: 'Avenir'
  }
})
