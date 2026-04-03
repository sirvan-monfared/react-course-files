import { use, useState } from "react";
import { NotesContext, NOTE_PRIORITIES } from './NotesContext'
import NoteCard from "./components/NoteCard";
import AddNoteForm from "./components/AddNoteForm";
export default function NotesPage() {
  const { notes, addNote } = use(NotesContext);

  
  const [searchQuery, setSearchQuery] = useState("");
  // Derived state: filter and sort notes
  const filteredAndSortedNotes = (() => {
    let filtered = notes

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query)
      )
    }

    const sorted = [...filtered].sort((a, b) => {
      // First: pinned status (pinned notes come first)
      const aPinned = a.isPinned ? 1 : 0
      const bPinned = b.isPinned ? 1 : 0
      if (aPinned !== bPinned) {
        return bPinned - aPinned // Descending: 1 (pinned) before 0 (not pinned)
      }

      // Second: priority level (higher priority comes first)
      const aPriority = NOTE_PRIORITIES.find((p) => p.value === (a.priority || 'medium'))?.level || 2
      const bPriority = NOTE_PRIORITIES.find((p) => p.value === (b.priority || 'medium'))?.level || 2
      if (aPriority !== bPriority) {
        return bPriority - aPriority // Descending: 3 (high) before 2 (medium) before 1 (low)
      }

      // Third: date (newest first)
      const aDate = new Date(a.updatedAt || a.createdAt).getTime()
      const bDate = new Date(b.updatedAt || b.createdAt).getTime()
      return bDate - aDate // Descending: newer dates first
    })

    return sorted
  })()

  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-2">یادداشت‌ها</h1>
        <p className="text-text-secondary">افکار و ایده‌های خود را ثبت کنید</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 جستجوی یادداشت‌ها..."
          className="w-full max-w-md px-4 py-3 bg-bg-secondary text-text-primary rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <AddNoteForm />
      

      

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
