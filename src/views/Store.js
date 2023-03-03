import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Products from '../components/Products/Products'
import CartContext from '../context/cart-context'
import classes from './store.module.css'

const Store = () => {
  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);

  const stayLogin = () => {
    let token = localStorage.getItem('token')
    let isLoggedIn = !!token
    if (!isLoggedIn) {
      navigate('/login');
    }
  }

  useEffect(() => {
    let user = localStorage.getItem('userName')
    cartCtx.fetchCartItem(user);
    stayLogin();
  }, [])

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