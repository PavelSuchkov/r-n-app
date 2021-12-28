import { Text, View, StyleSheet, Platform } from 'react-native'
import React from 'react'
import {THEME} from '../../theme'

export const Navbar = ({ title }) => {
  return (
    <View style={{ ...styles.navbar, ...Platform.select({
        ios: styles.navbarIOS,
        android: styles.navbarAndroid
      }) }}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 7
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIOS: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
    fontSize: 20,
  },
})
