import React, { useState } from 'react'
import { Button, View, StyleSheet, TextInput, Alert } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { THEME } from '../../theme'

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
      <FontAwesome.Button name='plus-circle'
                          className="button"
                          onPress={pressHandler}
                          style={styles.button}>
        Add
      </FontAwesome.Button>
        {/*<Button title="Add" style={styles.button} />*/}
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
    borderColor: THEME.MAIN_COLOR,
    fontSize: 18
  },
  button: {
    backgroundColor: THEME.GRAY_COLOR,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
  },
})

