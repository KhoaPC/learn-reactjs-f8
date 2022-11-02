import { useState, useEffect } from "react";


export default function AppChange() {
  // Khởi tạo state với giá trị là 1
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    // Chỉ thực thi 1 lần
    setCounter(counter + 1);
    setCounter(counter + 1);

    // Callback
    // Thực thi cả hai '1 lần'
    // setCounter(preCounter => preCounter + 5);
    // setCounter(preCounter => preCounter + 5);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Click</button>
    </div>
  );
}
