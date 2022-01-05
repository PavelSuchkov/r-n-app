import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'
import { ScreenContext } from '../screen/screenContext'
import { Alert } from 'react-native'


export const TodoState = ({ children }) => {

  const initialState = {
    todos: [{ id: '1', title: 'learn react-native' }],
  }

  const {changeScreen} = useContext(ScreenContext)

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (title) =>  dispatch({type: ADD_TODO, title})

  const removeTodo = (id) => {

    const todo = state.todos.find(td => td.id === id)

    Alert.alert(
          'Element removing',
          `Are you sure to remove "${todo.title}"?`,
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Remove',
              style: 'destructive',
              onPress: () => {
                changeScreen(null)
                dispatch({ type: REMOVE_TODO, id })
              },
            },
          ],
          { cancelable: false },
        )
  }

  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})

  return <TodoContext.Provider
    value={{
      todos: state.todos,
      addTodo,
      removeTodo,
      updateTodo,
    }}
  >{children}
  </TodoContext.Provider>
}
