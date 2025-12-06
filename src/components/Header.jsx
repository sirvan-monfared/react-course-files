export default function Header({onClick}) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              مرتب‌کننده وظایف بر اساس اولویت
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              مدیریت وظایف شما با محاسبه هوشمند فوریت
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
              onClick={onClick}
            >
              + افزودن وظیفه
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
