import { Button, View, StyleSheet, TextInput } from "react-native";
import React from 'react';

export const AddTodo = () => {
  debugger
  return (
    <View style={styles.block}>
      <TextInput style={styles.input}/>
      <Button title='Add' style={styles.button}/>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    padding: 10,
    // borderRadius: 5,
    borderColor: '#3949ab'
  },
  button: {
    borderWidth: 1,
    // borderRadius: 5,
    borderColor: '#3949ab'
  }
})

