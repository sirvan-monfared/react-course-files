import CartItem from './CartItem'
import { formatPrice } from '../utils/currency'
import { use } from "react"
import { CartContext } from '../stores/CartContext'

function Cart() {


  const { items } = use(CartContext)

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 h-fit" dir="rtl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">سبد خرید</h2>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="text-gray-500">سبد خرید شما خالی است</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {items.map(item => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">جمع کل:</span>

              <span className="text-2xl font-bold text-indigo-600">{formatPrice(cartTotal)} تومان</span>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
              تسویه حساب
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
