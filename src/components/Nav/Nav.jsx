import React from 'react'
import NavStyle from './Nav.module.css'
import logo from '../../assets/shop_logo.jpg'
import cart from '../../assets/cart.svg'

const Nav = () => {
  return (
    <nav className={NavStyle.container}>
      <div className={NavStyle.brand}>
        <img className={NavStyle.logo} src={logo} alt="logo" />
        <h1 className={NavStyle.name}>Valoo</h1>
      </div>
      <ul className={NavStyle.links}>
        <li><a href="#"><img className={NavStyle.cart} src={cart} alt="cart" /></a></li>
      </ul>
    </nav>
  )
}

export default Nav