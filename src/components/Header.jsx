import Navigation from './Navigation'

function Header({ cartCount }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50" dir="rtl">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <Navigation />
      </div>
    </header>
  )
}

export default Header
