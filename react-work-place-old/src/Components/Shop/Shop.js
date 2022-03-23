import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Produuct from '../Produuct/Produuct';
import './Shop.css'

const Shop = () => {

    const [products , setProducts ] = useState([]);
    
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    const handleAddToCart = (product)=> {
        console.log(product);
        //cart.push(product) !!! do not do this , cz it's Immutable 
        const newCart = [...cart , product  ];
        setCart(newCart);
    };

    const [ cart , setCart ] = useState([]);

    return (
        <div className="shop-container">
        <div className="products-container">
            {
                products.map(product => <Produuct key={product.id} product={product}  handleAddToCart={handleAddToCart} ></Produuct>)
            }
        </div>

        <div className="cart-container">
        <Cart cart={cart} ></Cart>
        </div>
        </div>
    );
};

export default Shop;

