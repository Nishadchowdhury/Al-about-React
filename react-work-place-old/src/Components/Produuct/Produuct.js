import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Produuct.css'

const Produuct = ({handleAddToCart , product}) => {
    const {name, img , seller , price , ratings} = product;
    


    return (
        <div className="product">
            <img src={img} alt="" />
           
           <div className="product-info">
           <p className='product-name'> {name} </p>
            <p>price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Raiting: {ratings} stars</small></p>
           </div>
           <button className='btn-cart' onClick={()=>{handleAddToCart(product)}} >
               <p>Add To Cart </p>
               <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Produuct;