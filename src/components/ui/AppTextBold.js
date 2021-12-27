import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { THEME } from '../../../theme'


export const AppTextBold = ({children, ...rest}) => (
  <Text style={{ ...styles.default, ...rest.style }}>{children}</Text>
)

const styles = StyleSheet.create({
  default: {
    fontFamily: THEME.FONTS.NORMAL,
    fontWeight: 'bold'
  }
})
