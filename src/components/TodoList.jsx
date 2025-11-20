import {useState} from 'react';
import TodoItem from "./TodoItem";

const initialTodos = [
  {
      id: 1,
      title: "Learn React state management",
      completed: false,
  },
  {
      id: 2,
      title: "Complete the project setup",
      completed: true,
  },
  {
      id: 3,
      title: "Practice component splitting",
      completed: false,
  },
  {
      id: 4,
      title: "Understand prop drilling",
      completed: false,
  },
  {
      id: 5,
      title: "Master immutable state updates",
      completed: true,
  }
]


export default function TodoList() {

  const [todos, setTodos] = useState(initialTodos)

  function toggleCompleted(id) {
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return {...item, completed: ! item.completed}
      } else {
        return item
      }
    })

    setTodos(newTodos)
  }


  return (
    <div className="todo-list">

      {/* Sample Todo Items */}
      {todos.map(todo => <TodoItem todo={todo}  handleToggleCompleted={toggleCompleted} />)}
      
    </div>
  );
}
