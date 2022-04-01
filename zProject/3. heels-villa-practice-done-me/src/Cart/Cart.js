import React, { useEffect, useState } from "react";
import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";

const Cart = ({ cart, handleClearCart }) => {
  // console.log(cart);

  

  const [SuggestPro, setSuggestPro] = useState({});

  const [suggestOnOff, setSuggestOnOff] = useState(false);

  useEffect(() => {

    if (cart.length > 0) {
      setSuggestOnOff(true)
    } else {
      setSuggestOnOff(false)
    }

  }, [cart]);


  const getRadomPro = () => {
    const randomN = Math.floor(Math.random() * cart.length);
    const SuggestPro = cart[randomN];
    setSuggestPro(SuggestPro);
  }

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
            <p>{product.quantity}</p>
          </div>
        </div>
      ))}
      <p>Buy SomeThing get one free</p>
      <button onClick={getRadomPro} className={suggestOnOff? "offer-button":"offer-button-disabled"  } disabled={!suggestOnOff}  >Give Me One</button>

      {Object.keys(SuggestPro).length > 0 &&

        <div className='cart-item'>
          <img src={SuggestPro.pairImage} alt='' />
          <div>
            <p>
              {SuggestPro.name} {SuggestPro.color}
            </p>
            <p>$ {SuggestPro.price}</p>
          </div>
        </div>}


    </div>
  );
};

export default Cart;
