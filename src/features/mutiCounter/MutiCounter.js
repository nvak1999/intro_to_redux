import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, increment, decrement } from "./action";
function MutiCounter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.mutiCounter);
  return (
    <div>
      <button onClick={() => dispatch(addCounter())}>Add counter</button>
      {counter.map((counter, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <button onClick={() => dispatch(decrement(index))}>-</button>
          <span>{counter.count}</span>
          <button onClick={() => dispatch(increment(index))}>+</button>
        </div>
      ))}
    </div>
  );
}

export default MutiCounter;
