import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './header.module.css'

const Header = () => {
  return (
    <>
    <header className={classes.header}>
        <ul>
            <li>HOME</li>
            <li>STORE</li>
            <li>ABOUT</li>
        </ul>
        <HeaderCartButton />
    </header>
    <h1 className={classes.heading}>The Generics</h1>
    </>
  )
}

export default Header