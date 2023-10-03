import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import './shop.css'  

export const Product =(props)=>{
    const {productDetails} = props
    const {id, productName, imageUrl, price} = productDetails
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

    return(
        <div className="product">
            <img src={imageUrl} alt={productName}/>
            <div className="description-shop">
                <p>{productName}</p>
                <p>Rs: {price}</p>
            </div>
            <button 
                className="add-to-cart-button" 
                onClick={()=> addToCart(id)}
            >
                Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    )
}
