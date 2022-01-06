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
import {Http} from '../../http'


export const TodoState = ({ children }) => {

  const initialState = {
    todos: [],
    loading: false,
    error: null,
  }

  const { changeScreen } = useContext(ScreenContext)

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = async (title) => {
    clearError()
    try {
      const data = await Http.post(`${ROOT_URL}.json`, { title })
      dispatch({ type: ADD_TODO, title, id: data.name })
    } catch (e) {
      showError('Something wrong, try again')
    }
  }

  const fetchTodos = async () => {
    showLoader()
    clearError()
    try {
      const data = await Http.get(`${ROOT_URL}.json`)
      const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
      dispatch({ type: FETCH_TODOS, todos })
    }
    catch (e) {
      showError('Something wrong, try again ')
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
              await Http.delete(`${ROOT_URL}/${id}.json`)
              dispatch({ type: REMOVE_TODO, id })
            }
            catch (e) {
              showError('Something wrong, try again ')
            }
          }
        }
      ],
      { cancelable: false },
    )
  }

  const updateTodo = async (id, title) => {
    showLoader()
    clearError()
    try {
      await Http.patch(`${ROOT_URL}/${id}.json`, {title})
      dispatch({ type: UPDATE_TODO, id, title })
    }
    catch (e) {
      showError('Something wrong, try again ')
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
