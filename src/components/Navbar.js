import { Text, View, StyleSheet } from "react-native";
import React from 'react';

export const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    height: 100, // thats do not works witx 'px'
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 7  // thats do not works witx 'px'
  },
  text: {
    color: 'white',
    fontSize: 20
  },
});
