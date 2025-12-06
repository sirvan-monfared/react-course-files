import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          هنوز وظیفه‌ای وجود ندارد
        </h3>
        <p className="text-gray-500">
          اولین وظیفه خود را اضافه کنید تا شروع کنید!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

