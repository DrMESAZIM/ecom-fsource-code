import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>

     <h2 className="logo">Ecommerce</h2>
     <img src="menu.png" alt="" className='menu'/>
     <ul>
     <li>
        <a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Cart</a></li>
     </ul>
    </div>
  )
}

export default Header