export default function Stats({todos, handleClearCompleted}) {

  const completed = todos.filter(item => item.completed).length;
  const active = todos.filter(item => !item.completed).length;
  const total = todos.length


  return (
    <div className="todo-footer">
      <div className="todo-stats">
        <span className="stat-item">
          <strong>Total:</strong> {total}
        </span>
        <span className="stat-item">
          <strong>Active:</strong> {active}
        </span>
        <span className="stat-item">
          <strong>Completed:</strong> {completed}
        </span>
      </div>
      <button className="clear-button" onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
}
