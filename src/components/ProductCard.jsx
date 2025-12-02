import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

function ProductCard({ product }) {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <ProductImage image={product.image} name={product.name} />
      <ProductInfo 
        product={product}
      />
    </div>
  )
}

export default ProductCard
