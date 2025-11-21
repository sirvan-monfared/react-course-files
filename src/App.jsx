import { useState } from "react";
import CreateTask from "./components/CreateTask";
import Filters from "./components/Filters";
import Stats from "./components/Stats";
import TodoList from "./components/TodoList";
import Header from "./components/ui/Header";
import initialTodos from "./utils/todos.js";

function App() {

  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('all')

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

      return [...todos, {
        id: oldTodos.length + 1,
        title: task,
        completed: false
      }]

    })
  }

  function deleteTask(todoId) {
    setTodos((oldTodos) => {
      return oldTodos.filter(todo => todo.id !== todoId)
    })
  }

  function clearCompletedTasks() {
    setTodos(oldTodos => {
      return oldTodos.filter(todo => ! todo.completed)
    })
  }

  function changeFilter(filterType) {
    setFilter(filterType)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return ! todo.completed;
    return true; //all
  })

  return (
    <div className="app">
      <div className="todo-container">
        <Header />

        <CreateTask handleCreateTask={createTask} />

        <Filters filter={filter} changeFilter={changeFilter} />

        <TodoList todos={filteredTodos} handleToggleCompleted={toggleCompleted} handleDelete={deleteTask} />

        <Stats todos={todos} handleClearCompleted={clearCompletedTasks} />
      </div>
    </div>
  );
}

export default App;
