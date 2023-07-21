import React, { useContext } from 'react'
import '../style/products.css'
import {Context} from '../context/Context'

const Prod = (props) => {
    const {id, title, desc, price, image, index} = props.data;
    const { addToCart } = useContext(Context);
  return (
    <div className='product'>
        <h3>{title}</h3>
        <img src={image} alt=""  width={120}/>
        <h4>{price} $</h4>
        <button className='btn' onClick={() => {addToCart(id,title,image,price)}}>Add to cart</button>
    </div>
  )
}

export default Prod