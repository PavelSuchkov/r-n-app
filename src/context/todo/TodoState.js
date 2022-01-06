import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import {
  ADD_TODO,
  CLEAR_ERROR,
  FETCH_TODOS,
  HIDE_LOADER,
  REMOVE_TODO, ROOT_URL,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO,
} from '../types'
import { ScreenContext } from '../screen/screenContext'
import { Alert } from 'react-native'


export const TodoState = ({ children }) => {

  const initialState = {
    todos: [],
    loading: false,
    error: null,
  }

  const { changeScreen } = useContext(ScreenContext)

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = async (title) => {
    const res = await fetch(`${ROOT_URL}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify({ title }),
    })
    const data = await res.json()
    dispatch({ type: ADD_TODO, title, id: data.name })
  }

  const fetchTodos = async () => {
    showLoader()
    clearError()
    try {
      const res = await fetch(
        `${ROOT_URL}.json`, {
          method: 'GET',
          headers: { 'Content-Type': 'application.json' },
        })
      const data = await res.json()
      const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
      dispatch({ type: FETCH_TODOS, todos })
    }
    catch (e) {
      showError('Something wrong, try again ')
      console.log(e)
    }
    finally {
      hideLoader()
    }
  }

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
          onPress: async () => {
            clearError()
            changeScreen(null)
            try {
              await fetch(`${ROOT_URL}/${id}.json`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application.json' }
              })
              dispatch({ type: REMOVE_TODO, id })

            }
            catch (e) {
              showError('Something wrong, try again ')
              console.log(e)
            }
          },
        },
      ],
      { cancelable: false },
    )
  }

  const updateTodo = async (id, title) => {
    showLoader()
    clearError()
    try {
      await fetch(`${ROOT_URL}/${id}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify({ title }),
      })
      dispatch({ type: UPDATE_TODO, id, title })
    }
    catch (e) {
      showError('Something wrong, try again ')
      console.log(e)
    }
    finally {
      hideLoader()
    }
  }

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const hideLoader = () => dispatch({ type: HIDE_LOADER })

  const showError = (error) => dispatch({ type: SHOW_ERROR, error })

  const clearError = () => dispatch({ type: CLEAR_ERROR })

  return <TodoContext.Provider
    value={{
      todos: state.todos,
      loading: state.loading,
      error: state.error,
      addTodo,
      removeTodo,
      updateTodo,
      fetchTodos,
    }}
  >{children}
  </TodoContext.Provider>
}
