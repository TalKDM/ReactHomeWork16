import React from 'react'
import { House, ShoppingCart } from 'phosphor-react';
import '../style/navbar.css'
import { Link } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <div className='nav'>
        <Link to='/'>
        <House size={40} weight="duotone" />
        </Link>
        <h1>Sv-Shop</h1>
        <Link to='/cart'>
        <ShoppingCart size={40} weight="duotone" />
        </Link>
    </div>
  )
}

export default Navbar