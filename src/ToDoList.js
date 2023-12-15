import React, { useEffect, useState } from "react";

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=2
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=2")
    .then((response) => response.json())
    .then(setToDos);
  }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;