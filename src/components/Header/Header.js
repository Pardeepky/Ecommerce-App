import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './header.module.css'
import { NavLink } from 'react-router-dom'

const Header = ({ showCartHandler }) => {
  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>
            <NavLink to='/' style={{ color: 'white', textDecoration: 'none' }}>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/store' style={{ color: 'white', textDecoration: 'none' }}>STORE</NavLink>
          </li>
          <li>
            <NavLink to='/about' style={{ color: 'white', textDecoration: 'none' }}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to='/contact-us' style={{ color: 'white', textDecoration: 'none' }}>CONTACT US</NavLink>
          </li>
        </ul>
        <HeaderCartButton showCartHandler={showCartHandler} />
      </header>
      <h1 className={classes.heading}>The Generics</h1>
    </>
  )
}

export default Header