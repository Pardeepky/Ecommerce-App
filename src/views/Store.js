import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Products from '../components/Products/Products'
import AuthContext from '../context/Auth-Context'
import CartContext from '../context/cart-context'
import classes from './store.module.css'

const Store = () => {
  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  useEffect(()=>{
    console.log(authCtx.isLoggedIn);
    if (authCtx.isLoggedIn){
      return;
    } else{
  navigate('/login')
    }
  },[authCtx.isLoggedIn])

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