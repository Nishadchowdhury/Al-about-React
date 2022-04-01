import React, { useEffect, useState } from "react";
import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";


const Cart = ({ cart, products, handleClearCart }) => {
  // console.log(addToLocalStorage);

  const [offer, setOffer] = useState(false);

  useEffect(() => {

    if (cart.length > 0) setOffer(true);
    else setOffer(false)

  }, [cart]);

  // console.log(offer);

  const [freeProduct, setFreeProduct] = useState({});
  const handleOffer = () => {

    const randomNumber = Math.floor(Math.random() * ((products.length) + 1));
    const item = products[randomNumber];
    setFreeProduct(item)
  }
  // console.log(products);

  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>Order Summery</h1>
        <button
          onClick={handleClearCart}
          className='remove-button'
          title='Clear Cart'
        >
          <IoTrashBin color='white' size={20} />
        </button>
      </div>
      {cart.map((product, index) => (
        <div key={index} className='cart-item'>
          <img src={product.pairImage} alt='' />
          <div>
            <p>
              {product.name} {product.color}
            </p>
            <p>$ {product.price}</p>
            <small>{product.quantity}</small>
          </div>
        </div>
      ))}
      <p>Buy one Get one free</p>
      <button onClick={handleOffer} className={offer ? 'offer-button' :'offer-button-disabled'} disabled={!offer} >Get One For Me</button>

      {Object.keys(freeProduct).length > 0 && <div className='cart-item'>
        <img src={freeProduct.pairImage} alt='' />
        <div>
          <p>
            {freeProduct.name} {freeProduct.color}
          </p>
          <p>$ {freeProduct.price}</p>
        </div>
      </div>
      }

    </div>

  );
};

export default Cart;
