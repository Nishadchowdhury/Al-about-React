import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart, product}= props;
    const {name, img, seller , price, ratings} = product;
    
    return (
        <div className="product">
            <img src={img} alt="" />
        <div className="info">
        <p className='name' >{name}</p>
        <p>price: ${price}</p>
        <p><small>Seller: {seller}</small></p>
        <p><span>Raitings: {ratings}</span></p>
        </div>
        <button onClick={()=>{handleAddToCart(323)}} className="btn-cart">
            <p>Add To Cart</p>
        </button>
        </div>
    );
};

export default Product;