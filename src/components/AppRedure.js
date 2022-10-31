import { useReducer } from "react";

export default function AppRedure() {
  // // UseReducer START
  const initState = 0;
  // Action
  const UP_ACTION = "UP";
  const DOWN_ACTION = "DOWN";
  // Reducer
  const reducer = (state, action) => {
    console.log("run");

    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      default:
        throw new Error("Invalid action");
    }
  };
  // dispatch

  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}
