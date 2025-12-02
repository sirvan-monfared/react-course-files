import CartIcon from './CartIcon'

function Navigation() {
  return (
    <nav className="flex items-center justify-between">
      <CartIcon />
      <div className="flex items-center gap-2">
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-900">فروشگاه</h2>
      </div>
    </nav>
  )
}

export default Navigation
