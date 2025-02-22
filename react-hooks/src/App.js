import { useReducer, useState } from "react";
import Todo from "./components/Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function newTodo(work) {
  return { id: Date.now(), todo: work, completed: false };
}
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.work)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const [work, setWork] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { work: work } });
    setWork("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default App;
