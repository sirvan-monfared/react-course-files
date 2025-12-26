import React, { useState } from "react";

export default function HabitFilters({filter, onFilterChange}) {

  const FILTERS = [
    { name: "all", title: "همه عادت ها" },
    { name: "completed", title: "تکمیل شده امروز" },
    { name: "active", title: "عادت‌های فعال" },
  ];

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {FILTERS.map((option) => (
        <button
          onClick={() => onFilterChange(option.name)}
          key={option.name}
          className={`px-4 py-2 rounded-lg ${
            option.name === filter
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-bg-secondary text-text-secondary hover:bg-bg-tertiary"
          }`}
        >
          {option.title}
        </button>
      ))}
    </div>
  );
}
