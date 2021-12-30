import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'


export const todoReducer = (state, action) => {
  switch (action.type) {
   case ADD_TODO:
    return {...state, todos: [...state.todos, {
     id: Date.now().toString(),
      title: action.title
     }]}

   case REMOVE_TODO:
    return {...state, todos: state.todos.filter(td => td.id !== action.id) }

   case UPDATE_TODO:
    return { ...state, todos: state.todos
       .map(td => td.id === action.id
         ? { ...td , title: action.title }
         : td)
    }

   default:
    return state
  }
 }
