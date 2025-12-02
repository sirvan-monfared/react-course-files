import CartItemDetails from './CartItemDetails'

function CartItem({ item }) {
  return (
    <div className="border-b pb-4 last:border-b-0">
      <CartItemDetails
        item={item}
      />
    </div>
  )
}

export default CartItem
