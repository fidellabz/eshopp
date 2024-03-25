import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        {/* Use Link component for navigation */}
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <p>ESHOPP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          {/* Use Link component for navigation */}
          <Link to='/' style={{textDecoration:'none'}}>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("men") }}>
          {/* Use Link component for navigation */}
          <Link to='/men' style={{textDecoration:'none'}}>Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("women") }}>
          {/* Use Link component for navigation */}
          <Link to='/women' style={{textDecoration:'none'}}>Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          {/* Use Link component for navigation */}
          <Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {/* Use Link component for navigation */}
        <Link to='/login'>
          <button>Login</button>
        </Link>
        {/* Use Link component for navigation */}
        <Link to='/cart'>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
