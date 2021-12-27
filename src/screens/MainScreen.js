import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'


export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {

  let content = <FlatList data={todos}
                          renderItem={({ item }) => (
                            <Todo
                            todo={item}
                            key={item.id}
                            onRemove={removeTodo}
                            onOpen={openTodo} />)} />

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require('../assets/no_items.png')} />
      </View>
    )
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  imgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50,
    height: 300,
  },
  img: {
    width: "100%",
    height: '100%',
    resizeMode: 'contain'
  }
})
