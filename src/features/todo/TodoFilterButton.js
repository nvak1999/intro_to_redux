import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./action";
function TodoFilterButton() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter("SHOW_ALL"))}>Show add</button>
      <button onClick={() => dispatch(setFilter("SHOW_COMPLETED"))}>
        Show completed
      </button>
      <button onClick={() => dispatch(setFilter("SHOW_ACTIVE"))}>
        Show active
      </button>
    </div>
  );
}

export default TodoFilterButton;
