import React, { useContext } from 'react'
import Products from '../components/Products/Products'
import CartContext from '../context/cart-context'
import classes from './store.module.css'

const Store = () => {

  const cartCtx = useContext(CartContext);

  return (
    <>
    <div className={classes.store}>
    <Products />
    </div>
    <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={cartCtx.showCartHandler}>See the Cart</button>
        </div>
    </>
  )
}

export default Store