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
import TodoAppWithUseState from "./components/AppTodoWithUseState";

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
        <li>
          <a href="/challenge-13">challenge-13</a>
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
        <Route path="/challenge-13" element={<TodoAppWithUseState title="Challenge #13: TodoAppWithUseState"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

/*
Hooks - G???n v??o component 
- L?? c??c h??m c???a React ????? s??? d???ng cho function component
- Ch??? s??? d???ng cho function component

Lifecycle Component
- Initialization: Kh???i t???o component
- Mounting: G???n component v??o DOM
- Updation: C???p nh???t 
- Unmounting: Th??o component kh???i DOM
- Error Handling: G???i khi c?? l???i
*/

/* useState      
- Tr???ng th??i c???a d??? li???u
*/

// const [name, setName] = useState('Abc');
// = const [state, setState] = useState(initialStateValue)
/*
state: ?????nh ngh??a t??n c???a state (l?? tham s??? c???a useState)
setState: Method d??ng cho vi???c update state (l?? tham s??? c???a useState)
initialStateValue: l?? gi?? tr??? ban ?????u c???a state.
*/

/* Two-way binding
L?? ch??ng ta thay ?????i d??? li???u t??? component qua view
v?? ng?????c l???i t??? view ch??ng ta thay ?????i d??? li???u trong component.
*/

/* Effect Hook
useEffect(effectFunction, arrayDependencies)

componentDidMount: component ???? g???n
componentDidUpdate: component ???? c???p nh???t 
componentWillUnmount: component s??? th??o g???

 N?? cho ph??p ch??ng ta truy c???p v?? s??? d???ng
c??c lifecycle hooks th??ng qua m???t API ???????c cung c???p b???i React.

- S??? th???c thi m???i khi component ???????c render th??nh c??ng (render l???n ?????u, re-render, update...)
*/

/*
Hooks - G???n v??o component 
- L?? c??c h??m c???a React ????? s??? d???ng cho function component
- Ch??? s??? d???ng cho function component

Lifecycle Component
- Initialization: Kh???i t???o component
- Mounting: G???n component v??o DOM
- Updation: C???p nh???t 
- Unmounting: Th??o component kh???i DOM
*/
