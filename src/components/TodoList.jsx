import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleToggleCompleted }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleToggleCompleted={handleToggleCompleted} />
      ))}
    </div>
  );
}
