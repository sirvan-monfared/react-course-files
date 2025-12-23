import { use } from "react";
import { NavigationContext } from "../store/NavigationContext";

const NAVIGATIONS = [
  { name: "dashboard", title: "داشبورد" },
  { name: "habits", title: "عادت‌ها" },
  { name: "timer", title: "تایمر" },
  { name: "notes", title: "یادداشت‌ها" },
];

export default function Navigation() {
  const { currentPage, navigate } = use(NavigationContext);

  return (
    <div className="hidden md:flex items-center gap-1">
      {NAVIGATIONS.map((nav) => (
        <button
          key={nav.name}
          className={`px-4 py-2 rounded-lg ${
            nav.name === currentPage
              ? "bg-indigo-500 text-white"
              : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
          }`}
          onClick={() => navigate(nav.name)}
        >
          <span className="mr-2">📊</span>
          {nav.title}
        </button>
      ))}
    </div>
  );
}
