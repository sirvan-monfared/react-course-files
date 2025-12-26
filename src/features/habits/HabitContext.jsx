import { createContext, useEffect, useState } from "react";

export const HabitContext = createContext({
  habits: [],
  addHabit: () => {},
  removeHabit: () => {},
  updateHabit: () => {},
  toggleToday: () => {},
  getToday: () => {},
});


let initialHabits = []
if (localStorage.getItem('habits')) {
  initialHabits = JSON.parse(localStorage.getItem('habits'));
}

export default function HabitProvider({ children }) {
  const [habits, setHabits] = useState(initialHabits ?? []);

  function addHabit(name, color) {
    setHabits((oldHabits) => {
      return [
        {
          id: Date.now().toString(),
          name: name,
          color: color,
          completions: [],
        },
        ...oldHabits,
      ];
    });
  }

  function removeHabit(id) {
    setHabits((oldHabits) => {
      return oldHabits.filter((habit) => habit.id !== id);
    });
  }

  function updateHabit(id, name) {
    setHabits((oldHabits) => {
      return oldHabits.map((habit) => (habit.id === id ? { ...habit, name: name } : habit));
    });
  }

  function getToday() {
    return new Date().toISOString().split("T")[0];
  }

  function toggleToday(id) {
    const today = getToday();
    setHabits((oldHabits) => {
      return oldHabits.map((habit) => {
        if (habit.id !== id) return habit;

        const isCompleted = habit.completions.includes(today);
        let newCompletions = [];

        if (isCompleted) {
          newCompletions = habit.completions.filter((item) => item !== today);
        } else {
          newCompletions = [...habit.completions, today];
        }

        return { ...habit, completions: newCompletions };
      });
    });
  }

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits))
  }, [habits])

  const value = {
    habits,
    addHabit,
    removeHabit,
    updateHabit,
    toggleToday,
    getToday
  };

  return <HabitContext value={value}>{children}</HabitContext>;
}
