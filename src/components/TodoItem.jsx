export default function TodoItem({todo, handleToggleCompleted, handleDelete}) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input type="checkbox" className="todo-checkbox" checked={todo.completed}
          onChange={() => handleToggleCompleted(todo.id)}
        />
        <span className="todo-text">{todo.title}</span>
      </div>
      <div className="todo-actions">
        <button className="action-button delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}
