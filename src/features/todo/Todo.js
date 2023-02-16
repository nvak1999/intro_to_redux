import React from "react";
import TodoAdd from "./TodoAdd";
import TodoFilterButton from "./TodoFilterButton";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterButton />
    </div>
  );
}

export default Todo;
