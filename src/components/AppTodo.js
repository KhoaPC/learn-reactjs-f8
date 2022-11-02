import TodoApp from "../Todo";

export default function AppTodo(title) {
  document.title = title;
  return <TodoApp />;
}
