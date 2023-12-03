import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from '../components/Navbar';
import Footer from '../components/Footer';
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Loginpage from "../pages/Loginpage";


function Navigation() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>        
            <Route path='/about' element={<About/>}/>        
            <Route path='/menu' element={<Menu/>}/>        
            <Route path='/cart' element={<Cart/>}/>        
            <Route path='/login' element={<Loginpage/>}/>        
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Navigation;