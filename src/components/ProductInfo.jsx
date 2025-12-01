import AddToCartButton from './AddToCartButton'
import { formatPrice } from '../utils/currency'

function ProductInfo({ product, isInCart, addToCart, removeFromCart }) {
  return (
    <div className="p-6" dir="rtl">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      <div className="flex items-center justify-between gap-4">
        <AddToCartButton
          product={product}
          isInCart={isInCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <span className="text-2xl font-bold text-indigo-600">{formatPrice(product.price)} تومان</span>
      </div>
    </div>
  )
}

export default ProductInfo
