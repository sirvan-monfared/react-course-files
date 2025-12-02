import {use} from "react";
import RemoveButton from './RemoveButton'
import { formatPrice } from '../utils/currency'
import { CartContext } from '../stores/CartContext'

function CartItemDetails({ item }) {

  const { update } = use(CartContext)


  return (
    <div className="flex gap-4" dir="rtl">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/80x80?text=Product'
        }}
      />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{formatPrice(item.price)} تومان</p>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">تعداد:</label>

          <button
            onClick={() => update(item.id, item.quantity - 1)}
            className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-semibold"
          >
            −
          </button>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <button
            onClick={() => update(item.id, item.quantity + 1)}
            className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-semibold"
          >
            +
          </button>
        </div>
      </div>
      <RemoveButton itemId={item.id} />

    </div>
  )
}

export default CartItemDetails
