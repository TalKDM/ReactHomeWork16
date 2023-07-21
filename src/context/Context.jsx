import React, { createContext, useState } from 'react';
import { productList } from '../productList';

export const Context = createContext(null);



export const ContextProvider = (props) => {

    const [cart,setCart] = useState([]);
    const [order,setOrder] = useState([]);

    const addToCart = (id,title,image,price) => {
      setCart((prev) => [...prev, {id,title,image,price}]);
      console.log(cart);
    };

    const totalAmount = () => {
      return cart.reduce((acc,current) => acc + current.price,0)
    };

    const buyNow = () => {
      setOrder([...cart])
      setCart([])
      console.log(cart);
    }

    const contextValue = {cart, addToCart, totalAmount, buyNow};






  return (
    <Context.Provider value={contextValue}>
      {props.children}
      </Context.Provider>
  )
}
