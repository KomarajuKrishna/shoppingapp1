import React from "react"
import {ProductsList} from '../../products'
import {Product} from './product'
import './shop.css'


const Shop =()=>{
    return(
        <div className="shop">
            <div className="shop-title">
                <h1>Grab Your Favourite Things</h1>
            </div>
            <div className="products">
                {ProductsList.map((product) =>(
                    <Product key={product.id} productDetails={product}/>
                ))}
            </div>
        </div>
    )
}
export default Shop