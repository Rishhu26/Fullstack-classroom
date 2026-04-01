import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo List 📝</h1>

      <input
        className="input-box"
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="add-btn" onClick={addTodo}>
        Add
      </button>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id} className="list-item">
            <span
              className={`todo-text ${todo.completed ? "completed" : ""}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
