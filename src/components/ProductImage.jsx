function ProductImage({ image, name }) {
  return (
    <div className="relative h-48 bg-gray-100 overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image'
        }}
      />
    </div>
  )
}

export default ProductImage
