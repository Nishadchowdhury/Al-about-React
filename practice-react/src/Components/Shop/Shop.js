import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';





const Shop = () => {
    
const [products , setProducts] = useState([]);

useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
} , []);


const handleAddToCart =(props)=> {
    console.log(props);
}



    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} 
                        handleAddToCart={handleAddToCart} 
                        product={product} ></Product>)
                }
            </div>
            <div className="cart-container">cart</div>
        </div>
    );
};

export default Shop;