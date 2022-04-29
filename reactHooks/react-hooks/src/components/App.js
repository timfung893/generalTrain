import React, { useState } from "react";
import "../components/App.css";
import ColorBox from "./ColorBox/ColorBox";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

function App() {
  const [todoList, setTodo] = useState([
    { id: 1, title: "WWE is my favorite show :)" },
    { id: 2, title: "I love anime too :)" },
    { id: 3, title: "Getting a big bike is my dream :)" },
    { id: 4, title: "I think this is gonna be a great year :)" },
  ]);

  // del todo on click
  function handleTodoClick(todo) {
    console.log(todo);
    const todoIndex = todoList.findIndex((x) => x.id === todo.id);

    if (todoIndex < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(todoIndex, 1);
    setTodo(newTodoList);
  }

  // get data from search bar
  function getValue(formValues) {
    console.log("data received: ", formValues);

    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodo(newTodoList);
  }

  return (
    <div className="app">
      <h1>Welcome to React</h1>
      <ColorBox />
      <TodoForm onSubmit={getValue} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
