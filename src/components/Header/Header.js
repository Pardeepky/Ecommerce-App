import React, { useContext } from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './header.module.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/Auth-Context'

const Header = ({ showCartHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const logoutHandler = ()=> {
    authCtx.logout();
    navigate('/login')
  }


  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined} end>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/store' className={({ isActive }) => isActive ? classes.active : undefined} end>STORE</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? classes.active : undefined} end>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to='/contact-us' className={({ isActive }) => isActive ? classes.active : undefined} end>CONTACT US</NavLink>
          </li>
          <li>
            {!authCtx.isLoggedIn && <NavLink to='/login' className={({ isActive }) => isActive ? classes.active : undefined} end>LOGIN</NavLink>}
          </li>
        </ul>
        {authCtx.isLoggedIn && location.pathname.includes('/store') && <HeaderCartButton showCartHandler={showCartHandler} />}
        {authCtx.isLoggedIn && <button className='btn btn-danger' onClick={logoutHandler} >Logout</button>}
      </header>
      <h1 className={classes.heading}>The Generics</h1>
    </>
  )
}

export default Header