import React from 'react'
import { View, StyleSheet } from 'react-native'

export const TaskCard = ({children, style}) => (
  <View style={ {...styles.default, ...style} }>{children}</View>
)

const styles = StyleSheet.create({
  default: {
    padding: 20,
    // borderWidth: 1,
    // borderColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 2},
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10
  }
})
