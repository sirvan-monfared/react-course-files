function AddToCartButton({ product, isInCart, addToCart, removeFromCart }) {
  const handleClick = () => {
    if (isInCart) {
      removeFromCart(product.id)
    } else {
      addToCart(product)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
        isInCart
          ? 'bg-red-500 hover:bg-red-600 text-white'
          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
      }`}
    >
      {isInCart ? 'حذف از سبد' : 'افزودن به سبد'}
    </button>
  )
}

export default AddToCartButton
