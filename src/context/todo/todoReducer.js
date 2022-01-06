import {
  ADD_TODO, CLEAR_ERROR, FETCH_TODOS, HIDE_LOADER,
  REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO,
} from '../types'

const handlers = {
  [ADD_TODO]: (state, { title, id }) => ({
    ...state, todos: [...state.todos, { id, title }]
  }),

  [REMOVE_TODO]: (state, { id }) => ({
    ...state, todos: state.todos.filter(td => td.id !== id),
  }),

  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),

  [HIDE_LOADER]: (state) => ({ ...state, loading: false }),

  [CLEAR_ERROR]: (state) => ({ ...state, error: null }),

  [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),

  [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),

  [UPDATE_TODO]: (state, { id, title }) => ({
    ...state, todos: state.todos.map(td => td.id === id
      ? { ...td, title }
      : td),
  }),
  DEFAULT: state => state,
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
