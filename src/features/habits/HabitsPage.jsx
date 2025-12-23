
export default function HabitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-2">ردیاب عادت</h1>
        <p className="text-text-secondary">ثبات ایجاد کنید، روز به روز</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white shadow-md">
          همه عادت‌ها
        </button>
        <button className="px-4 py-2 rounded-lg bg-bg-secondary text-text-secondary hover:bg-bg-tertiary">
          تکمیل شده امروز
        </button>
        <button className="px-4 py-2 rounded-lg bg-bg-secondary text-text-secondary hover:bg-bg-tertiary">
          عادت‌های فعال
        </button>
      </div>

      {/* Add Habit Form (Closed State) */}
      <div className="mb-8">
        <button className="w-full p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-indigo-500 hover:bg-bg-secondary transition-all duration-200 text-text-secondary hover:text-text-primary">
          + افزودن عادت جدید
        </button>
      </div>

      {/* Add Habit Form (Open State) */}
      <form className="glass rounded-xl p-6 shadow-lg border-2 border-indigo-500 mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-4">ایجاد عادت جدید</h3>

        {/* Name input */}
        <input
          type="text"
          placeholder="نام عادت (مثلاً: ورزش، مطالعه، مدیتیشن)"
          className="w-full px-4 py-2 mb-4 bg-bg-secondary text-text-primary rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Color picker */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-text-secondary mb-2">انتخاب رنگ</label>
          <div className="flex gap-2 flex-wrap">
            {[
              "#6366f1",
              "#8b5cf6",
              "#ec4899",
              "#f59e0b",
              "#10b981",
              "#3b82f6",
              "#ef4444",
              "#14b8a6",
            ].map((color, idx) => (
              <button
                key={idx}
                type="button"
                className={`w-10 h-10 rounded-full transition-all ${
                  idx === 0
                    ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 ring-indigo-500 scale-110"
                    : "hover:scale-105"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-80 transition-opacity"
          >
            افزودن عادت
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:opacity-80 transition-opacity"
          >
            لغو
          </button>
        </div>
      </form>

      {/* Habit Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Habit Card - Completed */}
        <div
          className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ borderLeft: "4px solid #6366f1" }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-text-primary cursor-pointer hover:opacity-80 transition-opacity flex-1">
              ورزش
            </h3>
            <div className="flex gap-2">
              <button className="p-1 text-text-secondary hover:text-text-primary transition-colors">
                ✏️
              </button>
              <button className="p-1 text-text-secondary hover:text-danger transition-colors">
                🗑️
              </button>
            </div>
          </div>

          {/* Streak indicator */}
          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="text-2xl">🔥</span>
              <span className="font-medium">۷ روز متوالی</span>
            </div>
          </div>

          {/* Today's progress */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded border-2 flex items-center justify-center transition-all bg-emerald-500 border-emerald-500 text-white">
                ✓
              </button>
            </div>
            <span className="text-sm text-text-secondary">امروز انجام شد ✓</span>
          </div>
        </div>

        {/* Habit Card - With Counter */}
        <div
          className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ borderLeft: "4px solid #10b981" }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-text-primary cursor-pointer hover:opacity-80 transition-opacity flex-1">
              خواندن صفحات
            </h3>
            <div className="flex gap-2">
              <button className="p-1 text-text-secondary hover:text-text-primary transition-colors">
                ✏️
              </button>
              <button className="p-1 text-text-secondary hover:text-danger transition-colors">
                🗑️
              </button>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="text-2xl">🔥</span>
              <span className="font-medium">۳ روز متوالی</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded border-2 flex items-center justify-center transition-all border-gray-300 dark:border-gray-600 hover:border-emerald-500"></button>
            </div>
            <span className="text-sm text-text-secondary">امروز انجام نشد </span>
          </div>
        </div>

        {/* Habit Card - Not Completed */}
        <div
          className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ borderLeft: "4px solid #ec4899" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-1 bg-bg-secondary text-text-primary rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoFocus
              />
              <button className="px-3 py-1 bg-success text-white rounded hover:opacity-80 transition-opacity">
                ذخیره
              </button>
              <button className="px-3 py-1 bg-gray-500 text-white rounded hover:opacity-80 transition-opacity">
                لغو
              </button>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="text-2xl">🔥</span>
              <span className="font-medium">۰ روز متوالی</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded border-2 flex items-center justify-center transition-all border-gray-300 dark:border-gray-600 hover:border-emerald-500"></button>
            </div>
            <span className="text-sm text-text-secondary">امروز انجام نشد</span>
          </div>
        </div>
      </div>
    </div>
  );
}
