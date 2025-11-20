import { useState } from "react";
import CreateTask from "./components/CreateTask";
import Filters from "./components/Filters";
import Stats from "./components/Stats";
import TodoList from "./components/TodoList";
import Header from "./components/ui/Header";
import initialTodos from "./utils/todos.js";

function App() {

  const [todos, setTodos] = useState(initialTodos);

  function toggleCompleted(id) {
    setTodos((oldTodos) => {
      return oldTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
    });
  }


  function createTask(task) {
    setTodos((oldTodos) => {
      oldTodos.push({
        id: oldTodos.length + 1,
        title: task,
        completed: false
      })

      console.log(oldTodos);

      return oldTodos
    })
  }

  return (
    <div className="app">
      <div className="todo-container">
        <Header />

        <CreateTask handleCreateTask={createTask} />

        <Filters />

        <TodoList todos={todos} handleToggleCompleted={toggleCompleted} />

        <Stats />
      </div>
    </div>
  );
}

export default App;
