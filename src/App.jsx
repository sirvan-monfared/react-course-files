export default function App() {
  return (
    <>
      <div className="min-h-screen bg-bg-primary">
        {/* ============================================
          NAVIGATION BAR
          ============================================ */}
        <nav className="glass border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <button className="flex items-center gap-2 text-xl font-bold text-text-primary hover:opacity-80 transition-opacity">
                ⚡ داشبورد بهره‌وری
              </button>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-1">
                <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white">
                  <span className="mr-2">📊</span>
                  داشبورد
                </button>
                <button className="px-4 py-2 rounded-lg text-text-secondary hover:bg-bg-secondary hover:text-text-primary">
                  <span className="mr-2">🎯</span>
                  عادت‌ها
                </button>
                <button className="px-4 py-2 rounded-lg text-text-secondary hover:bg-bg-secondary hover:text-text-primary">
                  <span className="mr-2">⏰</span>
                  تایمر
                </button>
                <button className="px-4 py-2 rounded-lg text-text-secondary hover:bg-bg-secondary hover:text-text-primary">
                  <span className="mr-2">📝</span>
                  یادداشت‌ها
                </button>
              </div>

              {/* Timer Status & Theme Toggle */}
              <div className="flex items-center gap-4">
                {/* Timer indicator (only shown when timer is running) */}
                <button className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium bg-indigo-500 text-white hover:opacity-80 transition-opacity">
                  <span>🎯</span>
                  <span>25:00</span>
                </button>

                {/* Theme Toggle */}
                <button className="p-2 rounded-lg bg-bg-secondary hover:bg-bg-tertiary transition-colors text-text-primary">
                  🌙 ☀️
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-1 pb-4 overflow-x-auto">
              <button className="px-3 py-2 rounded-lg text-sm whitespace-nowrap bg-indigo-500 text-white">
                <span className="mr-1">📊</span>
                داشبورد
              </button>
              <button className="px-3 py-2 rounded-lg text-sm whitespace-nowrap text-text-secondary hover:bg-bg-secondary hover:text-text-primary">
                <span className="mr-1">🎯</span>
                عادت‌ها
              </button>
              <button className="px-3 py-2 rounded-lg text-sm whitespace-nowrap text-text-secondary hover:bg-bg-secondary hover:text-text-primary">
                <span className="mr-1">⏰</span>
                تایمر
              </button>
              <button className="px-3 py-2 rounded-lg text-sm whitespace-nowrap text-text-secondary hover:bg-bg-secondary hover:text-text-primary">
                <span className="mr-1">📝</span>
                یادداشت‌ها
              </button>
            </div>
          </div>
        </nav>

        <main className="pb-8">
          {/* ============================================
            DASHBOARD PAGE
            ============================================ */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-text-primary mb-2">داشبورد</h1>
              <p className="text-text-secondary">نمای کلی بهره‌وری شما</p>
            </div>

            {/* Pomodoro Status Card */}
            <div className="glass rounded-xl p-6 mb-8 border-2 border-indigo-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    🎯 جلسه پومودورو فعال
                  </h3>
                  <p className="text-text-secondary">زمان تمرکز • ۲۴:۳۵ باقی‌مانده</p>
                </div>
                <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-80 transition-opacity">
                  مشاهده تایمر
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Total Habits Card */}
              <button className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-left w-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500 flex items-center justify-center text-2xl">
                    📊
                  </div>
                </div>
                <h3 className="text-sm font-medium text-text-secondary mb-1">کل عادت‌ها</h3>
                <p className="text-3xl font-bold text-text-primary mb-1">5</p>
              </button>

              {/* Completed Today Card */}
              <button className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-left w-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center text-2xl">
                    ✅
                  </div>
                </div>
                <h3 className="text-sm font-medium text-text-secondary mb-1">تکمیل شده امروز</h3>
                <p className="text-3xl font-bold text-text-primary mb-1">3 / 5</p>
              </button>

              {/* Best Streak Card */}
              <button className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-left w-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center text-2xl">
                    🔥
                  </div>
                </div>
                <h3 className="text-sm font-medium text-text-secondary mb-1">بهترین رکورد</h3>
                <p className="text-3xl font-bold text-text-primary mb-1">7</p>
                <p className="text-sm text-text-secondary">ورزش</p>
              </button>

              {/* Notes Count Card */}
              <button className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-left w-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center text-2xl">
                    📝
                  </div>
                </div>
                <h3 className="text-sm font-medium text-text-secondary mb-1">یادداشت‌ها</h3>
                <p className="text-3xl font-bold text-text-primary mb-1">12</p>
              </button>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="glass rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 w-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">ردیاب عادت</h3>
                <p className="text-text-secondary">
                  عادت‌های روزانه خود را ردیابی کنید و ثبات ایجاد کنید
                </p>
              </button>

              <button className="glass rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 w-full">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">تایمر پومودورو</h3>
                <p className="text-text-secondary">با جلسات کاری زمان‌بندی شده متمرکز بمانید</p>
              </button>

              <button className="glass rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 w-full">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">یادداشت‌ها</h3>
                <p className="text-text-secondary">افکار و ایده‌های خود را ثبت کنید</p>
              </button>
            </div>
          </div>

          {/* ============================================
            HABIT TRACKER PAGE
            ============================================ */}
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
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  انتخاب رنگ
                </label>
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

          {/* ============================================
            POMODORO TIMER PAGE
            ============================================ */}
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-text-primary mb-2">تایمر پومودورو</h1>
              <p className="text-text-secondary">متمرکز بمانید، استراحت کنید</p>
            </div>

            {/* Timer Display */}
            <div className="glass rounded-3xl p-12 shadow-2xl mb-8 text-center">
              {/* Session type indicator */}
              <div className="mb-6">
                <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold bg-indigo-500 text-white">
                  🎯 زمان تمرکز
                </span>
              </div>

              {/* Timer circle */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <svg className="transform -rotate-90 w-full h-full">
                  {/* Background circle */}
                  <circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="#6366f1"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 120}`}
                    strokeDashoffset={`${2 * Math.PI * 120 * 0.3}`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <div className="text-6xl font-bold text-text-primary mb-2">25:00</div>
                    <div className="text-sm text-text-secondary">در حال اجرا...</div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-4 justify-center">
                <button className="px-8 py-3 bg-amber-500 text-white rounded-xl hover:opacity-80 transition-opacity font-semibold text-lg">
                  توقف
                </button>
                <button className="px-8 py-3 bg-gray-500 text-white rounded-xl hover:opacity-80 transition-opacity font-semibold text-lg">
                  بازنشانی
                </button>
                <button className="px-8 py-3 bg-purple-500 text-white rounded-xl hover:opacity-80 transition-opacity font-semibold text-lg">
                  رد کردن
                </button>
              </div>
            </div>

            {/* Settings */}
            <div className="glass rounded-xl p-6 shadow-lg">
              <button className="w-full flex items-center justify-between text-text-primary font-semibold mb-4">
                <span>⚙️ تنظیمات</span>
                <span>▼</span>
              </button>

              <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {/* Work duration */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    مدت زمان کار: ۲۵ دقیقه
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    defaultValue="25"
                    className="w-full accent-indigo-500 dark:accent-indigo-400"
                  />
                </div>

                {/* Break duration */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    مدت زمان استراحت: ۵ دقیقه
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    defaultValue="5"
                    className="w-full accent-indigo-500 dark:accent-indigo-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ============================================
            NOTES PAGE
            ============================================ */}
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
              />
            </div>

            {/* Add note form (Closed State) */}
            <div className="mb-8">
              <button className="w-full p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-indigo-500 hover:bg-bg-secondary transition-all duration-200 text-text-secondary hover:text-text-primary">
                + افزودن یادداشت جدید
              </button>
            </div>

            {/* Add note form (Open State) - Enhanced with Priority */}
            <form className="glass rounded-xl p-6 shadow-lg border-2 border-indigo-500 mb-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">ایجاد یادداشت جدید</h3>

              <input
                type="text"
                placeholder="عنوان یادداشت (اختیاری)"
                className="w-full px-4 py-2 mb-4 bg-bg-secondary text-text-primary rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                placeholder="یادداشت خود را اینجا بنویسید..."
                rows="6"
                className="w-full px-4 py-2 mb-4 bg-bg-secondary text-text-primary rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />

              {/* Priority selection - Enhanced UI */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-secondary mb-3">
                  اولویت یادداشت
                </label>
                <div className="flex gap-3 justify-center">
                  {/* High Priority */}
                  <button
                    type="button"
                    className="flex-1 flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 shadow-lg scale-105"
                    style={{
                      backgroundColor: "#ef4444",
                      color: "white",
                      border: "2px solid #ef4444",
                    }}
                  >
                    <span className="text-2xl">🔴</span>
                    <span className="text-sm font-semibold">بالا</span>
                  </button>
                  {/* Medium Priority */}
                  <button
                    type="button"
                    className="flex-1 flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-102 hover:shadow-md opacity-70"
                    style={{
                      backgroundColor: "#f59e0b20",
                      color: "#f59e0b",
                      border: "2px solid #f59e0b40",
                    }}
                  >
                    <span className="text-2xl">🟡</span>
                    <span className="text-sm font-semibold">متوسط</span>
                  </button>
                  {/* Low Priority */}
                  <button
                    type="button"
                    className="flex-1 flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-102 hover:shadow-md opacity-70"
                    style={{
                      backgroundColor: "#10b98120",
                      color: "#10b981",
                      border: "2px solid #10b98140",
                    }}
                  >
                    <span className="text-2xl">🟢</span>
                    <span className="text-sm font-semibold">پایین</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-80 transition-opacity"
                >
                  افزودن یادداشت
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:opacity-80 transition-opacity"
                >
                  لغو
                </button>
              </div>
            </form>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Note Card - Pinned with High Priority */}
              <div
                className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px] flex flex-col"
                style={{ backgroundColor: "#fef3c7" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        یادداشت‌های جلسه
                      </h3>
                      <span className="text-lg" title="یادداشت پین شده">
                        📌
                      </span>
                    </div>
                    {/* Priority badge - Enhanced */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm"
                      style={{
                        backgroundColor: "#ef4444",
                        color: "white",
                      }}
                    >
                      <span className="text-sm">🔴</span>
                      <span>بالا</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-2">
                    <button
                      className="p-1 text-yellow-600 dark:text-yellow-400 transition-colors"
                      title="حذف پین"
                    >
                      📌
                    </button>
                    <button className="p-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                      ✏️
                    </button>
                    <button className="p-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                      🗑️
                    </button>
                  </div>
                </div>
                <p className="text-gray-800 dark:text-gray-200 flex-1 whitespace-pre-wrap mb-3">
                  بحث در مورد پیاده‌سازی ویژگی جدید و جدول زمانی.
                </p>

                {/* Statistics */}
                <div className="flex gap-4 text-xs text-gray-600 dark:text-gray-400 mb-2">
                  <span>12 کلمه</span>
                  <span>65 کاراکتر</span>
                </div>

                <div className="text-xs text-gray-600 dark:text-gray-400 mt-auto">Dec 4</div>
              </div>

              {/* Note Card - Medium Priority */}
              <div
                className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px] flex flex-col"
                style={{ backgroundColor: "#ddd6fe" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        ایده‌های پروژه
                      </h3>
                    </div>
                    {/* Priority badge - Enhanced */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm"
                      style={{
                        backgroundColor: "#f59e0b",
                        color: "white",
                      }}
                    >
                      <span className="text-sm">🟡</span>
                      <span>متوسط</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-2">
                    <button
                      className="p-1 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                      title="پین کردن"
                    >
                      📌
                    </button>
                    <button className="p-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                      ✏️
                    </button>
                    <button className="p-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                      🗑️
                    </button>
                  </div>
                </div>
                <p className="text-gray-800 dark:text-gray-200 flex-1 whitespace-pre-wrap mb-3">
                  - Todo app - Weather widget - Expense tracker
                </p>

                {/* Statistics */}
                <div className="flex gap-4 text-xs text-gray-600 dark:text-gray-400 mb-2">
                  <span>6 کلمه</span>
                  <span>42 کاراکتر</span>
                </div>

                <div className="text-xs text-gray-600 dark:text-gray-400 mt-auto">Dec 3</div>
              </div>

              {/* Note Card - Editing State with Priority Selection */}
              <div
                className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px] flex flex-col"
                style={{ backgroundColor: "#fed7aa" }}
              >
                <input
                  type="text"
                  defaultValue="فهرست خرید"
                  className="mb-3 px-3 py-2 bg-white/90 dark:bg-slate-700/90 text-gray-900 dark:text-slate-100 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
                />
                <textarea
                  defaultValue="شیر، نان، تخم مرغ"
                  className="flex-1 mb-3 px-3 py-2 bg-white/90 dark:bg-slate-700/90 text-gray-900 dark:text-slate-100 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows="6"
                />

                {/* Priority selection in edit mode - Enhanced UI */}
                <div className="mb-3">
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                    اولویت
                  </label>
                  <div className="flex gap-2">
                    {/* High Priority */}
                    <button
                      type="button"
                      className="flex-1 flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-102 hover:shadow-sm opacity-70"
                      style={{
                        backgroundColor: "#ef444420",
                        color: "#ef4444",
                        border: "2px solid #ef444440",
                      }}
                    >
                      <span className="text-lg">🔴</span>
                      <span>بالا</span>
                    </button>
                    {/* Medium Priority - Selected */}
                    <button
                      type="button"
                      className="flex-1 flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ring-2 ring-offset-1 ring-indigo-500 shadow-md scale-105"
                      style={{
                        backgroundColor: "#f59e0b",
                        color: "white",
                        border: "2px solid #f59e0b",
                      }}
                    >
                      <span className="text-lg">🟡</span>
                      <span>متوسط</span>
                    </button>
                    {/* Low Priority */}
                    <button
                      type="button"
                      className="flex-1 flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-102 hover:shadow-sm opacity-70"
                      style={{
                        backgroundColor: "#10b98120",
                        color: "#10b981",
                        border: "2px solid #10b98140",
                      }}
                    >
                      <span className="text-lg">🟢</span>
                      <span>پایین</span>
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:opacity-80 transition-opacity">
                    ذخیره
                  </button>
                  <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:opacity-80 transition-opacity">
                    لغو
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
