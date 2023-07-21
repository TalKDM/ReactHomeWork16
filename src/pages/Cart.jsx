import React, {useContext} from 'react'
import {Context} from '../context/Context'
import CartList from '../components/CartList';
import '../style/cart.css'

const Cart = (props) => {
  const { cart, totalAmount, buyNow } = useContext(Context);

  return (
    <div className='container'>
      <div className="cartItems">
        {cart.map((val,index) => {
          return <CartList data={val} id={val.id} title={val.title}  price={val.price} image={val.image} index={index}/>
        })}
        </div>
        {cart.length > 0 ?
        <div className="items">
        <button className='btn' onClick={() => {buyNow()}}>Buy Now</button>
        <h5 className='total'>Total Price: {totalAmount()}$</h5>
      </div>
      : <h1>The cart is empty!</h1>}
    </div>
  )
}

export default Cart