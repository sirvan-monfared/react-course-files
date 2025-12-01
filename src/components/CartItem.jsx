import CartItemDetails from './CartItemDetails'

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="border-b pb-4 last:border-b-0">
      <CartItemDetails
        item={item}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  )
}

export default CartItem
