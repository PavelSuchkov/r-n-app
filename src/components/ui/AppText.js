import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { THEME } from '../../../theme'


export const AppText = ({children, ...rest}) => (
  <Text style={{ ...styles.default, ...rest.style }}>{children}</Text>
)

const styles = StyleSheet.create({
  default: {
    fontFamily: THEME.FONTS.NORMAL
  }
})
