import { formatTime } from '../utils/formatTime';
import { getImportanceColor, getUrgencyColor } from '../utils/colors';

export default function TaskItem({ task, onDelete }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
        {/* { isHolding && <div className="mb-3">
          <ProgressBar progress={progress} />
          <p className="text-xs text-red-600 mt-1 text-center">
            Hold to delete...
          </p>
        </div> } */}


      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {task.title}
            </h3>
            {/* Urgency Indicator */}
            <div className="flex items-center gap-1">
              <span
                className={`w-3 h-3 rounded-full ${getUrgencyColor(task.urgency)}`}
                title={`فوریت: ${task.urgency.toFixed(1)}`}
              />
              <span className="text-xs text-gray-500">
                {task.urgency.toFixed(1)}
              </span>
            </div>
          </div>

          {task.description && (
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
          )}

          <div className="flex items-center gap-4 text-xs text-gray-500">
            {/* Importance Badge */}
            <div className="flex items-center gap-1">
              <span className="font-medium">اهمیت:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`w-4 h-4 rounded ${
                      level <= task.importance
                        ? getImportanceColor(task.importance)
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-1">({task.importance}/5)</span>
            </div>

            {/* Due Date */}
            {task.dueDate && (
              <span className="flex items-center gap-1">
                <span>📅</span>
                <span>{formatTime(task.dueDate)}</span>
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">

          <button
            type="button"
            className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 active:bg-red-200 transition-colors select-none touch-none outline-none focus:outline-none"
            onClick={() => onDelete(task.id)}
            style={{ 
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTouchCallout: 'none',
              touchAction: 'manipulation'
            }}
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}

