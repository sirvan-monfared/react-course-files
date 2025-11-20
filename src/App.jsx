import CreateTask from "./components/CreateTask";
import Filters from "./components/Filters";
import Stats from "./components/Stats";
import TodoList from "./components/TodoList";
import Header from "./components/ui/Header";

function App() {
  return (
    <div className="app">
      <div className="todo-container">
        <Header/>

        <CreateTask/>

        <Filters/>

        <TodoList/>

        <Stats/>
      </div>
    </div>
  );
}

export default App;
