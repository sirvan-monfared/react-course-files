import { use, useState } from "react";
import { HabitContext } from "../HabitContext";

const INITIAL_COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#ef4444",
  "#14b8a6",
];

export default function AddHabitForm() {

  const {addHabit} = use(HabitContext);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState(INITIAL_COLORS[0]);



  function onSubmit(e) {
    e.preventDefault();

    addHabit(name, color);
    onCancel();
  }

  function onCancel() {
    setName('');
    setColor(INITIAL_COLORS[0]);
    setOpen(false)
  }

  if (!open) {
    return (
      <div className="mb-8">
        <button
          onClick={() => setOpen(true)}
          className="w-full p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-indigo-500 hover:bg-bg-secondary transition-all duration-200 text-text-secondary hover:text-text-primary"
        >
          + افزودن عادت جدید
        </button>
      </div>
    );
  }

  return (
    <form className="glass rounded-xl p-6 shadow-lg border-2 border-indigo-500 mb-8" onSubmit={onSubmit}>
      <h3 className="text-lg font-semibold text-text-primary mb-4">ایجاد عادت جدید</h3>

      {/* Name input */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="نام عادت (مثلاً: ورزش، مطالعه، مدیتیشن)"
        className="w-full px-4 py-2 mb-4 bg-bg-secondary text-text-primary rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Color picker */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-text-secondary mb-2">انتخاب رنگ</label>
        <div className="flex gap-2 flex-wrap">
          {INITIAL_COLORS.map((clr, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setColor(clr)}
              className={`w-10 h-10 rounded-full transition-all ${
                clr === color
                  ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 ring-indigo-500 scale-110"
                  : "hover:scale-105"
              }`}
              style={{ backgroundColor: clr }}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-80 transition-opacity"
        >
          افزودن عادت
        </button>
        <button
          onClick={onCancel}
          type="button"
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:opacity-80 transition-opacity"
        >
          لغو
        </button>
      </div>
    </form>
  );
}
