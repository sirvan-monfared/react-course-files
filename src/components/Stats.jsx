export default function Stats() {
  return (
    <div className="todo-footer">
      <div className="todo-stats">
        <span className="stat-item">
          <strong>Total:</strong> 5
        </span>
        <span className="stat-item">
          <strong>Active:</strong> 3
        </span>
        <span className="stat-item">
          <strong>Completed:</strong> 2
        </span>
      </div>
      <button className="clear-button">Clear Completed</button>
    </div>
  );
}
