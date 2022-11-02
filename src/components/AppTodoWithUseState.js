import { useState, useRef } from "react";

export default function TodoAppWithUseState({ title }) {
  document.title = title;

  // Ref input todo
  const inputRef = useRef();
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    setTodoList((prev) => {
      const newTodo = [...prev, todo];

      inputRef.current.value = "";

      return newTodo;
    });
  };

  const handleDelete = (indexOuter) => {
    setTodoList(() => {
      const deleteTodo = todoList.filter((_, indexInner) => {
        return indexOuter !== indexInner;
      });
      return deleteTodo;
    });
  };

  return (
    <div>
      <input ref={inputRef} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
