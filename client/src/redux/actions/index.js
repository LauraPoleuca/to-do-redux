import axios from "axios";
import {
  ADDNEW_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB,
} from "./type";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8081/todos", { data });
    console.log("Received from server", res);
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo", error);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8081/todos");
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos", error);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8081/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling toggleTodo", error);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:8081/todos/${id}`, { data });
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateTodo ", error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:8081/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling deleteTodo", error);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
