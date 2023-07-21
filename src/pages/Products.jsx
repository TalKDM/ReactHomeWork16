import React from 'react'
import Prod from '../components/Prod'
import { productList } from '../productList'


const Products = (props) => {
  return (
    <div className='shop'>
        <div className='products'>
            {productList.map((val,index) => {
                return <Prod data={val} id={val.id} title={val.title}  desc={val.description} price={val.price} image={val.image} index={index}/>
            })}
        </div>
    </div>
  )
}

export default Products