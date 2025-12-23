
export default function TimerPage() {
  return (
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
  )
}
