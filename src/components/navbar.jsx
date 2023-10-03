import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart} from 'phosphor-react'
import'./navbar.css'

const Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="links">
                <Link to='/' className="nav-link">
                    <h1 className="shop-heading">Shop</h1>
                </Link>
                <Link to='/cart' className="nav-link">
                    <h1 className="cart-heading">Cart</h1> 
                </Link>
                <ShoppingCart size={32} color={"white"}/>
            </div>
        </div>
    )
}

export default Navbar