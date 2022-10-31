import { Routes, Route } from "react-router-dom";
import AppChange from "./components/AppChange";
import AppRandom from "./components/AppRandom";
import AppInput from "./components/AppInput";
import AppRadio from "./components/AppRadio";
import AppTodo1 from "./components/AppTodo1";
import AppDisplay from "./components/AppDisplay";
import AppRef from "./components/AppRef";
import AppCount from "./components/AppCount";
import AppStyle from "./components/AppStyle";
import AppRedure from "./components/AppRedure";
import AppTodo from "./components/AppTodo";

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
        <li>
          <a href="/challenge-10">challenge-10</a>
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
        <Route path="/challenge-10" element={<AppStyle />}></Route>
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
