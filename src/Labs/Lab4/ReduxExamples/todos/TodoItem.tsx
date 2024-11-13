import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex align-items-cente">
        <span className="me-auto">{todo.title}</span>
        <button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click" className="btn btn-primary me-2">
        Edit
      </button> 
      <button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click"  className="btn btn-danger">
        Delete
      </button>
    
    </li>
  );
}
