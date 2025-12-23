
export default function DashboardPage() {
  return (
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
            <h3 className="text-lg font-semibold text-text-primary mb-1">🎯 جلسه پومودورو فعال</h3>
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
  );
}
