import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAct {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAct {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAct>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAct => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
