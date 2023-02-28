import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './header.module.css'

const Header = ({showCartHandler}) => {
  return (
    <>
        <header className={classes.header}>
          <ul>
            <li>HOME</li>
            <li>STORE</li>
            <li>ABOUT</li>
          </ul> 
          <HeaderCartButton showCartHandler={showCartHandler} />
        </header>
        <h1 className={classes.heading}>The Generics</h1>
    </>
  )
}

export default Header