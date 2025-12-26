import { use } from "react";
import AddHabitForm from "./components/AddHabitForm";
import HabitCard from "./components/HabitCard";
import HabitFilters from "./components/HabitFilters";
import { HabitContext } from "./HabitContext";

export default function HabitsPage() {
  const {habits} = use(HabitContext);
  console.log(habits);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-2">ردیاب عادت</h1>
        <p className="text-text-secondary">ثبات ایجاد کنید، روز به روز</p>
      </div>

      <HabitFilters/>

      <AddHabitForm/>

      {/* Habit Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map(habit => <HabitCard key={habit.id} habit={habit}/>)}


      </div>
    </div>
  );
}
