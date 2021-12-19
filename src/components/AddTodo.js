import { Button, View, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

export const AddTodo = ({ onSubmit }) => {

  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Todo title is not be empty')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input}
                 onChangeText={setValue}
                 value={value}
                 placeholder="Type ur text..."
                 autoCorrect={false}
                 autoCapitalize="none" />
      <Button title="Add" style={styles.button} onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: '#3949ab',
  },
  button: {
    borderWidth: 1,
    borderColor: '#3949ab',
  },
})

