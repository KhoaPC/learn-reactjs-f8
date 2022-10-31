import { useState, useEffect, useRef, useMemo, useReducer } from "react";
import Content from "./Content";
import Button from "./module-style";
import { Routes, Route } from "react-router-dom";
import TodoApp from "./Todo";

// UseState START
function AppChange() {
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

// Random 1 thành phần trong mảng
const listGifts = ["Keybord", "Mouse", "Screen", "Camera"];
function AppRandom() {
  //
  const [gift, setGift] = useState();

  const randomGift = () => {
    const indexRandom = Math.floor(Math.random() * listGifts.length);

    // Thay đổi giá trị của 'gift' = listGifts[index]
    setGift(listGifts[indexRandom]);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>{gift || "Chưa có quà"}</h1>
      <button onClick={randomGift}>Lấy quà</button>
    </div>
  );
}

// Two-way binding START
function AppInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      email,
    });
  };
  return (
    <div style={{ padding: 40 }}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Hello</button>
    </div>
  );
}

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];
function AppRadio() {
  const [checked, setChecked] = useState();

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={course.id === checked}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
// Two-way binding END

function AppTodo1() {
  const [note, setJob] = useState("");
  const [listNote, setJobs] = useState([]);

  const handleSubmit = () => {
    // Thêm note vào list
    setJobs((prev) => {
      const newJobs = [...prev, note];

      return newJobs;
    });
    // Value input = ''
    setJob("");
  };

  function handleDelete(index) {
    const newJobs = listNote.filter((value, i) => i !== index);
    // Set list note
    setJobs(newJobs);
  }

  return (
    <div className="App" style={{ padding: 30 }}>
      <input value={note} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {listNote.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
// UseState END

// UseEffect START
function AppDisplay() {
  const [show, setShow] = useState(false);

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}
// --> Content.js
// UseEffect END

// UseRef START
// Luôn return về obj có giá trị là current
function AppRef() {
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
// UseRef END

// useMemo START
function AppCount() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [products, setProducts] = useState([]);
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
  };

  // useMemo: Ghi nhớ kết quả của hàm
  // Khi nào dependencies thay đổi thì nó sẽ gọi
  const total = useMemo(() => {
    const result = products.reduce((prev, product) => {
      return prev + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="App">
      <input
        value={name}
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={price}
        placeholder="enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        Total:{total}
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
// useMemo END

function AppStyle() {
  return (
    <div>
      <Button active></Button>
      <Button></Button>
      <Button disable></Button>
      <Button active></Button>
    </div>
  );
}

// UseReducer START
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
function AppRedure() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

function AppTodo() {
  return <TodoApp />;
}
// UseReducer END

// Router
function App() {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/challenge-1">challenge-1</a>
        </li>
        <li>
          <a href="/challenge-2">challenge-2</a>
        </li>
        <li>
          <a href="/challenge-3">challenge-3</a>
        </li>
        <li>
          <a href="/challenge-4">challenge-4</a>
        </li>
        <li>
          <a href="/challenge-5">challenge-5</a>
        </li>
        <li>
          <a href="/challenge-6">challenge-6</a>
        </li>
        <li>
          <a href="/challenge-7">challenge-7</a>
        </li>
        <li>
          <a href="/challenge-8">challenge-8</a>
        </li>
        <li>
          <a href="/challenge-9">challenge-9</a>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<AppChange />}></Route>
        <Route path="/challenge-1" element={<AppRandom />}></Route>
        <Route path="/challenge-2" element={<AppInput />}></Route>
        <Route path="/challenge-3" element={<AppRadio />}></Route>
        <Route path="/challenge-4" element={<AppTodo1 />}></Route>
        <Route path="/challenge-5" element={<AppDisplay />}></Route>
        <Route path="/challenge-6" element={<AppRef />}></Route>
        <Route path="/challenge-7" element={<AppCount />}></Route>
        <Route path="/challenge-8" element={<AppRedure />}></Route>
        <Route path="/challenge-9" element={<AppTodo />}></Route>
      </Routes>
    </div>
  );
}

export default App;

/*
Hooks - Gắn vào component 
- Là các hàm của React để sử dụng cho function component
- Chỉ sử dụng cho function component

Lifecycle Component
- Initialization: Khởi tạo component
- Mounting: Gắn component vào DOM
- Updation: Cập nhật 
- Unmounting: Tháo component khỏi DOM
- Error Handling: Gọi khi có lỗi
*/

/* useState      
- Trạng thái của dữ liệu
*/

// const [name, setName] = useState('Abc');
// = const [state, setState] = useState(initialStateValue)
/*
state: định nghĩa tên của state (là tham số của useState)
setState: Method dùng cho việc update state (là tham số của useState)
initialStateValue: là giá trị ban đầu của state.
*/

/* Two-way binding
Là chúng ta thay đổi dữ liệu từ component qua view
và ngược lại từ view chúng ta thay đổi dữ liệu trong component.
*/

/* Effect Hook
useEffect(effectFunction, arrayDependencies)

componentDidMount: component đã gắn
componentDidUpdate: component đã cập nhật 
componentWillUnmount: component sẽ tháo gỡ

 Nó cho phép chúng ta truy cập và sử dụng
các lifecycle hooks thông qua một API được cung cấp bởi React.

- Sẽ thực thi mỗi khi component được render thành công (render lần đầu, re-render, update...)
*/

/*
Hooks - Gắn vào component 
- Là các hàm của React để sử dụng cho function component
- Chỉ sử dụng cho function component

Lifecycle Component
- Initialization: Khởi tạo component
- Mounting: Gắn component vào DOM
- Updation: Cập nhật 
- Unmounting: Tháo component khỏi DOM
*/
