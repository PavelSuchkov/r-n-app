/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

const App = () => {

  const [todos, setTodos] = useState([{ id: '1', title: 'testing task' }])
  const [todoId, setTodoId] = useState('1')

  const addTodo = (title) => {
    setTodos((prev) => [{ id: Date.now().toString(), title }, ...prev],
    )
  }

  const removeTodo = (id) => {
    const todo = todos.find(td => td.id === id)
    Alert.alert(
      'Element removing',
      `Are you sure to remove "${todo.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        }
      ],
      { cancelable: false }
    )
  }

  let content = <MainScreen todos={todos} addTodo={addTodo}
                            removeTodo={removeTodo}
                            openTodo={setTodoId} />

  if (todoId) {
    const selectedTodo = todos.find(td => td.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)}
                          todo={selectedTodo}
                          removeTodo={removeTodo}/>
  }

  return (
    <View>
      <Navbar title="List of todo&rsquo;s " />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
})

export default App
