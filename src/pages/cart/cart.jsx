import React, { useContext } from "react";
import {ProductsList} from '../../products'
import { ShopContext } from "../../context/shopContext";
import {CartItem} from './cartItem'
import { useNavigate } from "react-router-dom";
import './cart.css'

const Cart =()=>{
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    // console.log(totalAmount)
    const navigate = useNavigate()
    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart-items">
                {ProductsList.map((product) =>{ 
                    if(cartItems[product.id] !== 0){
                        return <CartItem key={product.id} productDetails={product}/>
                    }else{
                        return undefined
                    }
                })}
            </div>

            {(totalAmount !== 0) ? (
                <>
                    <p className="total-amount"> Sub Total = Rs:<span>{totalAmount}</span></p>
                    <div className="button-container">
                        <button className="button" onClick={()=>navigate("/")}>Continue Shopping</button>
                        <button className="button">Checkout</button>
                    </div>
                </>

                ) : (
                    <div>
                        <h1>Your Cart is Empty</h1>
                    </div>
                ) 
            }
            
        </div>
    )
}

export default Cart