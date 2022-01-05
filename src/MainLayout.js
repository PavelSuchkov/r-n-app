import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Navbar } from './components/Navbar'
import { THEME } from '../theme'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'


export const MainLayout = () => {

  // const {todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
  const {todoId} = useContext(ScreenContext )
  // const [todos, setTodos] = useState(todoContext.todos )
  // const [todoId, setTodoId] = useState(null)

  // const addTodo = (title) => todoContext.addTodo(title)

  // const removeTodo = (id) => {
  //   const todo = todos.find(td => td.id === id)
  //   Alert.alert(
  //     'Element removing',
  //     `Are you sure to remove "${todo.title}"?`,
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Remove',
  //         style: 'destructive',
  //         onPress: () => {
  //           setTodoId(null)
  //           setTodos(prev => prev.filter(todo => todo.id !== id))
  //         },
  //       },
  //     ],
  //     { cancelable: false },
  //   )
  // }

  // const updateTodo = (id, title) => {
  //   setTodos(old => old.map(td => td.id === id ? { ...td, title } : td))
  // }



  return (
    <View>
      <Navbar title="List of todo&rsquo;s " />
      <View style={styles.container}>
        {todoId ? <TodoScreen/> : <MainScreen/>}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
})
