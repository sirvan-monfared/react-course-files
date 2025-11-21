export default function Filters({ filter, changeFilter }) {
  return (
    <div className="todo-filters">
      <button className={`filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => changeFilter("all")}>
        All
      </button>
      <button className={`filter-button ${filter === 'active' ? 'active' : ''}`} onClick={() => changeFilter("active")}>
        Active
      </button>
      <button className={`filter-button ${filter === 'completed' ? 'active' : ''}`} onClick={() => changeFilter("completed")}>
        Completed
      </button>
    </div>
  );
}
