import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'

const handlers = {
  [ADD_TODO]: (state, { title }) => ({
    ...state, todos: [...state.todos, {
      id: Date.now().toString(),
      title,
    }],
  }),

  [REMOVE_TODO]: (state, { id }) => ({
    ...state, todos: state.todos.filter(td => td.id !== id),
  }),

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
