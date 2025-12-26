import React, { useState } from "react";

export default function HabitFilters() {
  const [currentFilter, setCurrentFilter] = useState("all");

  const FILTERS = [
    { name: "all", title: "همه عادت ها" },
    { name: "completed", title: "تکمیل شده امروز" },
    { name: "active", title: "عادت‌های فعال" },
  ];

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {FILTERS.map((filter) => (
        <button
          onClick={() => setCurrentFilter(filter.name)}
          key={filter.name}
          className={`px-4 py-2 rounded-lg ${
            filter.name === currentFilter
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-bg-secondary text-text-secondary hover:bg-bg-tertiary"
          }`}
        >
          {filter.title}
        </button>
      ))}
    </div>
  );
}
