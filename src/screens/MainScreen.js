import React from 'react'
import { Button, View, StyleSheet, TextInput, Text, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';


export const MainScreen = ({todos, addTodo, removeTodo}) => {
  return(
    <View>
    <AddTodo onSubmit={addTodo} />
    <FlatList data={todos}
              renderItem={({ item }) => (<Todo
                                          todo={item}
                                          key={item.id}
                                          onRemove={removeTodo}/>)} />
  </View>
  )
}

const styles = StyleSheet.create({

})
