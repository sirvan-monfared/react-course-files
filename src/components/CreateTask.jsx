export default function CreateTask() {
  return (
    <div className="todo-input-section">
      <div className="input-wrapper">
        <input type="text" className="todo-input" placeholder="What needs to be done?" />
        <button className="add-button">
          <span className="add-icon">+</span>
          Add Task
        </button>
      </div>
    </div>
  );
}
