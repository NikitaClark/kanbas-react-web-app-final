import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);
  const [todo, setTodo] = useState({ id: "-1", title: "" });

  const addTodo = (todo: any) => {
    const newTodos = [
      ...todos,
      { ...todo, id: new Date().getTime().toString() }, // Assign a unique ID
    ];
    setTodos(newTodos);
    setTodo({ id: "-1", title: "" }); // Reset the input field
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) =>
      item.id === todo.id ? todo : item
    );
    setTodos(newTodos);
    setTodo({ id: "-1", title: "" }); // Reset the input field
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center">
          <input
            className="form-control me-2"
            placeholder="Enter todo title"
            value={todo.title}
            onChange={(e) =>
              setTodo({ ...todo, title: e.target.value })
            }
          />
          <button
            onClick={() => addTodo(todo)}
            id="wd-add-todo-click"
            className="btn btn-primary me-2"
          >
            Add
          </button>
          <button
            onClick={() => updateTodo(todo)}
            id="wd-update-todo-click"
            className="btn btn-secondary"
          >
            Update
          </button>
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex align-items-center">
            <span className="me-auto">{todo.title}</span>
            <button
              onClick={() => setTodo(todo)}
              id="wd-set-todo-click"
              className="btn btn-warning me-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              id="wd-delete-todo-click"
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
