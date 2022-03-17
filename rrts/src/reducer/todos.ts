import { Todo, FetchTodosAct, ActionTypes } from "../actions";

export const todosReducer = (state: Todo[] = [], action: FetchTodosAct) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
