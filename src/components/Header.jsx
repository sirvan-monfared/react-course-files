import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {




  return (
    <nav className="glass border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button className="flex items-center gap-2 text-xl font-bold text-text-primary hover:opacity-80 transition-opacity">
            ⚡ داشبورد بهره‌وری
          </button>

          {/* Navigation Links */}
          <Navigation/>

          {/* Timer Status & Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* Timer indicator (only shown when timer is running) */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium bg-indigo-500 text-white hover:opacity-80 transition-opacity">
              <span>🎯</span>
              <span>25:00</span>
            </button>

            <ThemeSwitcher/>
          </div>
        </div>

        
      </div>
    </nav>
  );
}
