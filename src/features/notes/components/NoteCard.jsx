import { useState, useContext } from 'react'
import { NotesContext, NOTE_PRIORITIES } from '../NotesContext'

/**
 * Note Card Component
 * 
 * Educational notes:
 * - Local state for editing mode
 * - Controlled inputs for form handling
 * - Priority display and editing
 * - Pinning functionality (array manipulation)
 * - Statistics calculation (derived state)
 */
export default function NoteCard({ note }) {
  const { updateNote, removeNote, togglePin, calculateNoteStats } = useContext(NotesContext)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)
  const [priority, setPriority] = useState(note.priority || 'medium')

  // Calculate statistics (derived state - calculated on each render)
  const stats = calculateNoteStats({ ...note, content })

  const handleSave = () => {
    updateNote(note.id, title, content, priority)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTitle(note.title)
    setContent(note.content)
    setPriority(note.priority || 'medium')
    setIsEditing(false)
  }

  const getPriorityInfo = (priValue) => {
    return NOTE_PRIORITIES.find((pri) => pri.value === priValue) || NOTE_PRIORITIES[1]
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fa-IR', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
    })
  }

  return (
    <div
      className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px] flex flex-col"
      style={{ backgroundColor: note.color }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3 px-3 py-2 bg-white/90 dark:bg-slate-700/90 text-gray-900 dark:text-slate-100 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
            placeholder="عنوان یادداشت"
            autoFocus
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-1 mb-3 px-3 py-2 bg-white/90 dark:bg-slate-700/90 text-gray-900 dark:text-slate-100 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            placeholder="محتوای یادداشت..."
            rows="6"
          />
          
          {/* Priority selection in edit mode - Enhanced UI */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
              اولویت
            </label>
            <div className="flex gap-2">
              {NOTE_PRIORITIES.map((pri) => (
                <button
                  key={pri.value}
                  type="button"
                  onClick={() => setPriority(pri.value)}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    priority === pri.value
                      ? 'ring-2 ring-offset-1 ring-indigo-500 shadow-md scale-105'
                      : 'hover:scale-102 hover:shadow-sm opacity-70'
                  }`}
                  style={{
                    backgroundColor: priority === pri.value ? pri.color : `${pri.color}20`,
                    color: priority === pri.value ? 'white' : pri.color,
                    border: priority === pri.value ? `2px solid ${pri.color}` : `2px solid ${pri.color}40`,
                  }}
                >
                  <span className="text-lg">{pri.icon}</span>
                  <span>{pri.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-success text-white rounded-lg hover:opacity-80 transition-opacity"
            >
              ذخیره
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:opacity-80 transition-opacity"
            >
              لغو
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{note.title}</h3>
                {note.isPinned && (
                  <span className="text-lg" title="یادداشت پین شده">📌</span>
                )}
              </div>
              {/* Priority badge - Enhanced */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm"
                style={{
                  backgroundColor: getPriorityInfo(note.priority || 'medium').color,
                  color: 'white',
                }}
              >
                <span className="text-sm">{getPriorityInfo(note.priority || 'medium').icon}</span>
                <span>{getPriorityInfo(note.priority || 'medium').label}</span>
              </div>
            </div>
            <div className="flex gap-2 ml-2">
              <button
                onClick={() => togglePin(note.id)}
                className={`p-1 transition-colors ${
                  note.isPinned
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400'
                }`}
                aria-label={note.isPinned ? 'حذف پین' : 'پین کردن'}
                title={note.isPinned ? 'حذف پین' : 'پین کردن'}
              >
                📌
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                aria-label="ویرایش یادداشت"
              >
                ✏️
              </button>
              <button
                onClick={() => removeNote(note.id)}
                className="p-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                aria-label="حذف یادداشت"
              >
                🗑️
              </button>
            </div>
          </div>
          <p className="text-gray-800 dark:text-gray-200 flex-1 whitespace-pre-wrap mb-3">{note.content}</p>
          
          {/* Statistics */}
          <div className="flex gap-4 text-xs text-gray-600 dark:text-gray-400 mb-2">
            <span>{stats.words} کلمه</span>
            <span>{stats.characters} کاراکتر</span>
          </div>
          
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-auto">
            {formatDate(note.updatedAt)}
          </div>
        </>
      )}
    </div>
  )
}

