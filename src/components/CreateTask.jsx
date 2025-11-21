import { useState } from "react";

export default function CreateTask({handleCreateTask}) {

  const [task, setTask] = useState('')

  function submit() {
    handleCreateTask(task);
    setTask('');
  } 

  function handleInput(e) {
    setTask(e.target.value)
  }

  return (
    <div className="todo-input-section">
      <div className="input-wrapper">
        <input type="text" className="todo-input" placeholder="What needs to be done?"
          onInput={handleInput} value={task}
         />
        <button className="add-button" onClick={submit}>
          <span className="add-icon">+</span>
          Add Task
        </button>
      </div>
    </div>
  );
}
