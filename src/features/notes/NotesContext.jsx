import { useEffect, useState } from "react";
import { createContext } from "react";

export const NOTE_PRIORITIES = [
  { value: "high", label: "بالا", level: 3, color: "#ef4444", icon: "🔴" },
  { value: "medium", label: "متوسط", level: 2, color: "#f59e0b", icon: "🟡" },
  { value: "low", label: "پایین", level: 1, color: "#10b981", icon: "🟢" },
];

export const NotesContext = createContext({
  notes: [],
  addNote: () => {},
  removeNote: () => {},
  updateNote: () => {},
});

const generateColor = () => {
  const colors = [
    "#fef3c7", // yellow
    "#ddd6fe", // purple
    "#fed7aa", // orange
    "#cffafe", // cyan
    "#d1fae5", // green
    "#fce7f3", // pink
    "#e0e7ff", // indigo
    "#fef2f2", // red
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

let initialNotes = []
if (localStorage.getItem('notes')) {
  initialNotes = JSON.parse(localStorage.getItem('notes'));
}

export default function NoteProvider({ children }) {
  const [notes, setNotes] = useState(initialNotes ?? []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(title, content, priority) {
    setNotes((prevNotes) => [
      {
        id: Date.now().toString(),
        title: title.trim() || "بدون عنوان",
        content: content.trim() || "",
        priority: priority || "low",
        isPinned: false,
        color: generateColor(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      ...prevNotes,
    ]);
  }

  function removeNote(id) {
    setNotes((oldNotes) => {
      return oldNotes.filter((note) => note.id !== id);
    });
  }

  function updateNote(id, title, content, priority) {
    setNotes((oldNotes) => {
      return oldNotes.map((note) =>
        note.id === id ? { ...note, title, content, priority } : note,
      );
    });
  }

  const togglePin = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, isPinned: !note.isPinned } : note)),
    );
  };

  const calculateNoteStats = (note) => {
    const content = note.content || "";
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    const characters = content.length;
    const charactersNoSpaces = content.replace(/\s/g, "").length;

    return {
      words,
      characters,
      charactersNoSpaces,
    };
  };

  const value = {
    notes,
    addNote,
    removeNote,
    updateNote,
    togglePin,
    calculateNoteStats,
  };

  return <NotesContext value={value}>{children}</NotesContext>;
}
