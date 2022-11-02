// Reaname title page
import { Routes, Route, Link } from "react-router-dom";
import AppChange from "./components/AppChange";
import AppRandom from "./components/AppRandom";
import AppInput from "./components/AppInput";
import AppRadio from "./components/AppRadio";
import AppRef from "./components/AppRef";
import AppCount from "./components/AppCount";
import AppStyle from "./components/AppStyle";
import AppRedure from "./components/AppRedure";
import AppTodo from "./components/AppTodo";

import ContentCountdown from "./components/ContentCountdown";
import ContentUseAPI from "./components/ContentUseAPI";
import ContentGetImg from "./components/ContentGetImg";
import ContentRealTime from "./components/ContentRealTime";

// import {
//   ContentCountdown,
//   ContentUseAPI,
//   ContentGetImg,
//   ContentX as ContentRealTime,
// } from "./Content";
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
        <li>
          <a href="/challenge-11">challenge-11</a>
        </li>
        <li>
          <a href="/challenge-12">challenge-12</a>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<AppChange />} />
        <Route path="/challenge-1" element={<AppRandom title="Challenge #1: AppChange" />}></Route>
        <Route path="/challenge-2" element={<AppInput title="Challenge #2: AppInput" />}></Route>
        <Route path="/challenge-3" element={<AppRadio title="Challenge #3: AppRadio"/>}></Route>
        <Route path="/challenge-4" element={<AppRef title="Challenge #4: AppRef"/>}></Route>
        <Route path="/challenge-5" element={<AppCount title="Challenge #5: AppCount"/>}></Route>
        <Route path="/challenge-6" element={<AppRedure title="Challenge #6: AppRedure"/>}></Route>
        <Route path="/challenge-7" element={<AppTodo title="Challenge #7: AppTodo"/>}></Route>
        <Route path="/challenge-8" element={<AppStyle title="Challenge #8: AppStyle"/>}></Route>
        <Route path="/challenge-9" element={<ContentCountdown title="Challenge #9: ContentCountdown"/>}></Route>
        <Route path="/challenge-10" element={<ContentGetImg title="Challenge #10: ContentGetImg"/>}></Route>
        <Route path="/challenge-11" element={<ContentUseAPI title="Challenge #11: ContentUseAPI"/>}></Route>
        <Route path="/challenge-12" element={<ContentRealTime title="Challenge #12: ContentRealTime"/>}></Route>
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
