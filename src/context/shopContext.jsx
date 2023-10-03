import React, {createContext, useState} from "react";
import { ProductsList } from "../products";

export const ShopContext = createContext()

const getLocalStorageInformation = () =>{
    let initialCartItems = localStorage.getItem("cartItems")
    if (initialCartItems === {}) {
        return[]
    }else{
        return JSON.parse(initialCartItems)
    }
}

const getDefaultCart = () =>{
    let cart = getLocalStorageInformation()
    // for (let i = 1; i < ProductsList.length + 1; i++){
    //     cart[i] = 0;
    // }
    return cart
}

export const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())
    localStorage.setItem("cartItems", JSON.stringify(cartItems))


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = ProductsList.find((product)=> product.id === Number(item))
                console.log(itemInfo)
                const itemPrice =  cartItems[item] * (itemInfo.price)
                // console.log(cartItems[item])
                // console.log(itemInfo.price)
                console.log(itemPrice)
                totalAmount += itemPrice
                console.log(totalAmount)
            }
        }
        return totalAmount
        
    } 

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItem =(newAmount, itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:newAmount}))
    }




    // console.log(cartItems)

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItem, getTotalCartAmount}


    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}