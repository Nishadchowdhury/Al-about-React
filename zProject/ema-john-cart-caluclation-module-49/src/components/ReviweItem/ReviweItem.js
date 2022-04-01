import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviweItem.css'

const ReviweItem = ({handleRemoveProduct , product}) => {

    const { name, img, price, shipping, quantity} = product;
    return (
        <div className='reviwe-item'>

            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviwe-item-container">

                <div className="reviwe-item-details">
                    <p className="product-name" title={name}>
                        {name.length > 15 ? name.slice(0, 15) + '..' : name}

                    </p>
                    <p>Price: <span className='orange-color'> ${price}</span></p>
                    <small>Shipping: ${shipping}</small><br />
                    <strong><small>Quantity: {quantity} </small></strong>
                </div>

                <div className="delete-container">
                    <button onClick={()=>{handleRemoveProduct(product)}} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviweItem;