import { GlobalReducer } from './models/types'


declare global {
  interface GlobalReducerEvent{
    ADD_TODO:{
      id: string
      text: string
    }
  }
}

export const todosReducer: GlobalReducer<{ todos: { id: string }[] }> = (
  state,
  event
) =>{
  return state
}


