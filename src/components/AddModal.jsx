import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function AddModal({ open, onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState(3);
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    let dueDateTimestamp = null;
    if (dueDate) {
      const dateTime = dueTime ? `${dueDate}T${dueTime}` : `${dueDate}T23:59`;
      dueDateTimestamp = new Date(dateTime).getTime();
    }

    const newTask = {
      title: title.trim(),
      description: description.trim(),
      importance: parseInt(importance),
      dueDate: dueDateTimestamp,
    };

    onAdd(newTask);
    onClose();
  };

  useEffect(() => {
    if (!open) {
      setTitle("");
      setDescription("");
      setImportance(3);
      setDueDate("");
      setDueTime("");
    }
  }, [open]);

  if (!open) return;

  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">افزودن وظیفه جدید</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">عنوان *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="عنوان وظیفه را وارد کنید"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">توضیحات</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="توضیحات وظیفه را وارد کنید (اختیاری)"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            اهمیت: {importance}/5
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>کم</span>
            <span>زیاد</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">تاریخ سررسید</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">زمان سررسید</label>
            <input
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!dueDate}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-colors"
          >
            لغو
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
          >
            افزودن وظیفه
          </button>
        </div>
      </form>
    </Modal>
  );
}
