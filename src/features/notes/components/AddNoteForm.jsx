import { use, useState } from "react";
import { NotesContext } from "../NotesContext";

export default function AddNoteForm() {


  const { addNote } = use(NotesContext);
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("low");



  function onAddNote() {
    addNote(title, content, priority);
    setIsCreating(false);
    setTitle("");
    setContent("");
    setPriority("low");
  }
  function onCancel() {
    setIsCreating(false);
    setTitle("");
    setContent("");
    setPriority("low");
  }


  return (
    <>
      <div className="mb-8">
        <button
          onClick={() => setIsCreating(true)}
          className="w-full p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-indigo-500 hover:bg-bg-secondary transition-all duration-200 text-text-secondary hover:text-text-primary"
        >
          + افزودن یادداشت جدید
        </button>
      </div>

      {isCreating && (
        <form
          className="glass rounded-xl p-6 shadow-lg border-2 border-indigo-500 mb-8"
          onSubmit={onAddNote}
        >
          <h3 className="text-lg font-semibold text-text-primary mb-4">ایجاد یادداشت جدید</h3>

          <input
            type="text"
            placeholder="عنوان یادداشت (اختیاری)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-bg-secondary text-text-primary rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            placeholder="یادداشت خود را اینجا بنویسید..."
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-bg-secondary text-text-primary rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-text-secondary mb-3">
              اولویت یادداشت
            </label>
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                className={`flex-1 flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${priority === "high" ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 shadow-lg scale-105" : "opacity-70 hover:scale-102 hover:shadow-md"}`}
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "2px solid #ef4444",
                }}
                onClick={() => setPriority("high")}
              >
                <span className="text-2xl">🔴</span>
                <span className="text-sm font-semibold">بالا</span>
              </button>
              {/* Medium Priority */}
              <button
                type="button"
                className={`flex-1 flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${priority === "medium" ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 shadow-lg scale-105" : "opacity-70 hover:scale-102 hover:shadow-md"}`}
                style={{
                  backgroundColor: "#f59e0b20",
                  color: "#f59e0b",
                  border: "2px solid #f59e0b40",
                }}
                onClick={() => setPriority("medium")}
              >
                <span className="text-2xl">🟡</span>
                <span className="text-sm font-semibold">متوسط</span>
              </button>
              {/* Low Priority */}
              <button
                type="button"
                className={`flex-1 flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${priority === "low" ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 shadow-lg scale-105" : "opacity-70 hover:scale-102 hover:shadow-md"}`}
                style={{
                  backgroundColor: "#10b98120",
                  color: "#10b981",
                  border: "2px solid #10b98140",
                }}
                onClick={() => setPriority("low")}
              >
                <span className="text-2xl">🟢</span>
                <span className="text-sm font-semibold">پایین</span>
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-80 transition-opacity"
            >
              افزودن یادداشت
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:opacity-80 transition-opacity"
              onClick={onCancel}
            >
              لغو
            </button>
          </div>
        </form>
      )}
    </>
  );
}
