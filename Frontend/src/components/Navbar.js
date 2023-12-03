import React from "react";
import "../styles/Navbar.css";
// import "../styles/Loginpage.css";
import logo from "../assets/images/logo.png";
import carticon from "../assets/icons/carticon.png";
import avataricon from "../assets/icons/avatar.png";
import { NavLink } from "react-router-dom";
// import LoginModal from "../pages/Loginpage";
// import logo from "";

export const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div className="navbar-center">
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="navbartext">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbartext">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="navbartext">Menu</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <NavLink to="/login">
          <img src={avataricon} alt="avatar-icon" className="profile-avatar" />
        </NavLink>
        <NavLink to="/cart">
          <img src={carticon} alt="shopping-cart" className="cart-button" />
        </NavLink>
      </div>
    </nav>
  );
};

// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav id='navbar' className='bg-black text-white'>
//       <div className='w-full-container mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2'>
//         <div className='logo-wrapper pl-4 flex items-center'>
//           <img src={"/"} alt='logo'/>
//         </div>
//         <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
//           <div>Home</div>
//           <div>Menu</div>
//           <div>About</div>
//         </div>
//         <div className='flex items-center justify-center space-x-4'>
//           <div>Cart</div>
//           <div>Sign Up</div>
//         </div>
//       </div>
//     </nav>
//   )
// }
// export default Navbar;
