import React from 'react'
import '../style/cart.css'

const CartList = (props) => {
    const {id, title, price, image, index} = props.data;
  return (
    <div className='cartSection'>
        <div className="cart">
            <h4>{title}</h4>
            <img src={image} alt="product" width={90}/>
            <p>{price} $</p>
        </div>
    </div>
  )
}

export default CartList