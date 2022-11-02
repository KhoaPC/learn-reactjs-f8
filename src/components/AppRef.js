import { useState, useRef, useEffect } from "react";

export default function AppRef({title}) {

   document.title = title;
  // Luôn return về obj có giá trị là current
  const [count, setCount] = useState(60);

  // Lưu lại giá trị của setInterval để khi re-render giá trị không thay đổi

  const timerId = useRef();

  /* const handleStart = () => {
    timerId.current = setInterval(() => {
      // Callback bên trong setCount để lưu lại giá trị của count
      setCount(prevState => prevState - 1);
      console.log(timerId);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  }*/

  // useEffect(() => {}, [count]);

  function clickHandler() {
      timerId.current = setInterval(() => {
        setCount((prevState) => prevState - 1);
        console.log(timerId);
      }, 1000);
    
  }

  function resetHandler() {
    setCount((prevState) => (prevState = 60));
    clearInterval(timerId.current);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={clickHandler}>{timerId.current ? "Stop" : "Start"}</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
