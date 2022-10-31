import { useState, useRef } from "react";

export default function AppRef() {
  // UseRef START
  // Luôn return về obj có giá trị là current
  const [count, setCount] = useState(60);
  // Lưu lại giá trị của setInterval để khi re-render giá trị không thay đổi
  const timerId = useRef();
  const handleStart = () => {
    timerId.current = setInterval(() => {
      // Callback bên trong setCount để lưu lại giá trị của count
      setCount((prevState) => prevState - 1);
      console.log(timerId);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
