import React from "react";
import { ACTIONS } from "../App";
const Todo = ({ todo, dispatch }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ color: todo.completed ? "green" : "red" }}>{todo.todo}</div>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
