import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import {THEME} from '../../theme'

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 7
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
})
