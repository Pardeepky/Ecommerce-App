import React from 'react'
import classes from './headerCart.module.css'

const HeaderCartButton = () => {
  return (
    <>
    <span className={classes.button}>Cart <span className={classes.badge}>0</span></span>
    </>
  )
}

export default HeaderCartButton