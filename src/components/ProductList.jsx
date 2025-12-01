import ProductCard from './ProductCard'

function ProductList({ products, cart, addToCart, removeFromCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  )
}

export default ProductList
