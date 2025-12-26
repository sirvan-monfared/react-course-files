import { use, useState } from "react";
import { HabitContext } from "../HabitContext";

export default function HabitCard({ habit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(habit.name)

  const { removeHabit, updateHabit, toggleToday, getToday } = use(HabitContext);


  function onSave() {
    updateHabit(habit.id, editName);
    setIsEditing(false);
  }

  function onCancel() {

    setIsEditing(false);
    setEditName(habit.name);
  }


  const isCompletedToday = habit.completions.includes(getToday())

  return (
    <div
      className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      style={{ borderLeft: `4px solid ${habit.color}` }}
    >
      <div className="flex items-start justify-between mb-4">
        {!isEditing && (
          <>
            <h3 className="text-xl font-semibold text-text-primary cursor-pointer hover:opacity-80 transition-opacity flex-1">
              {habit.name}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-text-secondary hover:text-text-primary transition-colors"
              >
                ✏️
              </button>
              <button
                onClick={() => removeHabit(habit.id)}
                className="p-1 text-text-secondary hover:text-danger transition-colors"
              >
                🗑️
              </button>
            </div>
          </>
        )}

        {isEditing && (
          <div className="flex-1 flex gap-2">
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="flex-1 px-3 py-1 bg-bg-secondary text-text-primary rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              autoFocus
            />
            <button onClick={onSave} className="px-3 py-1 bg-success text-white rounded hover:opacity-80 transition-opacity">
              ذخیره
            </button>
            <button onClick={onCancel} className="px-3 py-1 bg-gray-500 text-white rounded hover:opacity-80 transition-opacity">
              لغو
            </button>
          </div>
        )}
      </div>

      {/* Streak indicator */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span className="text-2xl">🔥</span>
          <span className="font-medium">۷ روز متوالی</span>
        </div>
      </div>

      {/* Today's progress */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
          onClick={() => toggleToday(habit.id)}
          className={`w-8 h-8 rounded border-2 flex items-center justify-center transition-all
          ${isCompletedToday ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-300 dark:border-gray-600 hover:border-emerald-500'}`}>
            {isCompletedToday && '\u2713'}
          </button>
        </div>
        <span className="text-sm text-text-secondary">{isCompletedToday ? 'امروز انجام شده' : 'امروز انجام نشده'}</span>
      </div>
    </div>
  );
}
