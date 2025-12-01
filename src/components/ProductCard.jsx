import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

function ProductCard({ product, cart, addToCart, removeFromCart }) {
  const isInCart = cart.some(item => item.id === product.id)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <ProductImage image={product.image} name={product.name} />
      <ProductInfo 
        product={product}
        isInCart={isInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  )
}

export default ProductCard
