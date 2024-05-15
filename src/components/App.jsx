import React, { useState } from "react";
import currentTime from "./CurrentTime";
import ToDoItem from "./ToDoItems";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(currentTime());

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function createTodo(event) {
    if (todo !== "") {
      setTodos((prevTodos) => {
        const newTodos = [...prevTodos, todo];
        setTodo("");
        console.log(newTodos);
        return newTodos;
      });
    }
  }

  function deleteItem(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function updateTime() {
    setCurrentDateTime(currentTime());
  }

  setInterval(() => {
    updateTime();
  }, 1000);

  return (
    <div className="container">
      <div className="time">
        {currentDateTime.hour}:{currentDateTime.minute}:{currentDateTime.second}
      </div>
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="To Do"
          value={todo}
          onChange={handleChange}
        />
        <button type="submit" onClick={createTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
