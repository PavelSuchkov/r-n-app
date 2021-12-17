import { Button, View, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

export const AddTodo = ({ onSubmit }) => {

  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      //error
    }
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input}
                 onChangeText={setValue }
                 value={value}
                 placeholder="Type ur text..." />
      <Button title="Add" style={styles.button} onPress={pressHandler} />
    </View>
  );
};

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
});

