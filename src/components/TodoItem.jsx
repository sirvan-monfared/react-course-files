export default function TodoItem({todo, handleToggleCompleted}) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input type="checkbox" className="todo-checkbox" checked={todo.completed}
          onChange={() => handleToggleCompleted(todo.id)}
        />
        <span className="todo-text">{todo.title}</span>
      </div>
      <div className="todo-actions">
        <button className="action-button delete-button">Delete</button>
      </div>
    </div>
  );
}
