
export default function NotesPage() {
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
  );
}
