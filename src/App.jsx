import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { SAMPLE_TASKS } from "./utils/sampleTasks";
import AddModal from "./components/AddModal";
import { calculateUrgency } from "./utils/calculateUrgency";

function App() {
  const [isModalOpen, setIsAddModalOpen] = useState(false);
  const [tasks, setTasks] = useState(SAMPLE_TASKS)

  useEffect(() => {
    
    setTimeout(() => {
      setTasks((oldTasks) => {
        console.log('called');
        return [...oldTasks].sort((a, b) => b.urgency - a.urgency)
      })
    }, 2000)

  }, [tasks.length])

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleAddTask = (task) => {
    setTasks((oldTasks) => {
      return [
        {
          id: Date.now().toString(),
          ...task,
          urgency: calculateUrgency(task),
          createdAt: Date.now(),
        },
        ...oldTasks,
      ];
    });
  };

  const handleTaskDelete = (taskId) => {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== taskId));
  };


  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header onClick={openAddModal} />

        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">وظایف شما</h2>
              <p className="text-sm text-gray-500 mt-1">{SAMPLE_TASKS.length} وظیفه</p>
            </div>
          </div>
          <TaskList tasks={tasks} onDelete={handleTaskDelete} />
        </main>
      </div>


      <AddModal
        open={isModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTask}
      ></AddModal>
    </>
  );
}

export default App;
