function App() {
  return (
    <div className="app">
      <div className="todo-container">
        {/* Header */}
        <header className="todo-header">
          <h1 className="todo-title">My Todo List</h1>
          <p className="todo-subtitle">Stay organized and productive</p>
        </header>

        {/* Input Section */}
        <div className="todo-input-section">
          <div className="input-wrapper">
            <input
              type="text"
              className="todo-input"
              placeholder="What needs to be done?"
            />
            <button className="add-button">
              <span className="add-icon">+</span>
              Add Task
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="todo-filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Active</button>
          <button className="filter-button">Completed</button>
        </div>

        {/* Todo List */}
        <div className="todo-list">
          {/* Sample Todo Items */}
          <div className="todo-item">
            <div className="todo-item-content">
              <input type="checkbox" className="todo-checkbox" />
              <span className="todo-text">Learn React state management</span>
            </div>
            <div className="todo-actions">
              <button className="action-button edit-button">Edit</button>
              <button className="action-button delete-button">Delete</button>
            </div>
          </div>

          <div className="todo-item completed">
            <div className="todo-item-content">
              <input type="checkbox" className="todo-checkbox" checked />
              <span className="todo-text">Complete the project setup</span>
            </div>
            <div className="todo-actions">
              <button className="action-button edit-button">Edit</button>
              <button className="action-button delete-button">Delete</button>
            </div>
          </div>

          <div className="todo-item">
            <div className="todo-item-content">
              <input type="checkbox" className="todo-checkbox" />
              <span className="todo-text">Practice component splitting</span>
            </div>
            <div className="todo-actions">
              <button className="action-button edit-button">Edit</button>
              <button className="action-button delete-button">Delete</button>
            </div>
          </div>

          <div className="todo-item">
            <div className="todo-item-content">
              <input type="checkbox" className="todo-checkbox" />
              <span className="todo-text">Understand prop drilling</span>
            </div>
            <div className="todo-actions">
              <button className="action-button edit-button">Edit</button>
              <button className="action-button delete-button">Delete</button>
            </div>
          </div>

          <div className="todo-item completed">
            <div className="todo-item-content">
              <input type="checkbox" className="todo-checkbox" checked />
              <span className="todo-text">Master immutable state updates</span>
            </div>
            <div className="todo-actions">
              <button className="action-button edit-button">Edit</button>
              <button className="action-button delete-button">Delete</button>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
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
      </div>
    </div>
  );
}

export default App;
