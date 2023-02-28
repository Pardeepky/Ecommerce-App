import React from 'react'
import Products from '../components/Products/Products'
import classes from './store.module.css'

const Store = () => {
  return (
    <>
    <div className={`container ${classes.store}`}>
    <Products />
    </div>
    </>
  )
}

export default Store