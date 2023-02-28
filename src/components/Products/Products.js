import React from 'react'
import productsArr from '../../assets/data'
import ProductsList from './ProductsList'

const Products = () => {
  return (
    <>
      <div className='row'>
        {productsArr.map((item) => {
          return <ProductsList key={item.id} item={item} />
        })}
      </div>
    </>
  )
}

export default Products