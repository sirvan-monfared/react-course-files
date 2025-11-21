import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleToggleCompleted, handleDelete }) {

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleToggleCompleted={handleToggleCompleted} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
