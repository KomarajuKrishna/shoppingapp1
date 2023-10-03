import React,{useContext} from "react";
import { ShopContext } from "../../context/shopContext";
import './cart.css'

export const CartItem = (props) =>{
    const{productDetails} = props
    const {id, productName, price, imageUrl} = productDetails
    const {cartItems, addToCart, removeFromCart, updateCartItem} = useContext(ShopContext)

    return(
        <div className="cart-item">
            <img src={imageUrl} alt={productName} className="cart-item-img"/>
            <div className="description">
                <p className="product-heading">{productName}</p>
                <p>Rs: {price}</p>
                <div className="count-handler">
                    <button type='button' onClick={()=>removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(event)=>updateCartItem(Number(event.target.value), id)}/>
                    <button type='button' onClick={()=>addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}