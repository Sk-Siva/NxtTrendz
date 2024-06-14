import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const price = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const totalItem = cartList.reduce((acc, item) => acc + item.quantity, 0)
      return (
        <div className="summary-con">
          <h1>Order Total: Rs {price}/-</h1>
          <p>{totalItem} items in cart</p>
          <button className="btn">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
