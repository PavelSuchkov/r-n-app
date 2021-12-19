import React from 'react'
import { Button, View, StyleSheet, TextInput, Text } from 'react-native';


export const TodoScreen = ({todo, goBack }) => {
  return <View>
    <Text>{todo.title}</Text>
    <Button title='Back ' onPress={() => {goBack()}}/>
  </View>
}

const styles = StyleSheet.create({

})
