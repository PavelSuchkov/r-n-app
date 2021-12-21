import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import robotoRegular  from '/src/assets/fonts/Roboto'

export const Todo = ({ todo, onRemove, onOpen }) => {

  return (
    <TouchableOpacity activeOpacity={0.5}
                      onPress={() => {
                        onOpen(todo.id)
                      }}
                      onLongPress={onRemove.bind(this, todo.id)}>
      <View style={styles.todo}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 12,
  },
  text: {
    fontFamily: 'Roboto-Bold'
  }
})
