import React from 'react'
import classes from './headerCart.module.css'

const HeaderCartButton = ({ showCartHandler }) => {
  return (
    <>
      <button className={classes.button} onClick={showCartHandler}>Cart <span className={classes.badge}>0</span></button>
    </>
  )
}

export default HeaderCartButton