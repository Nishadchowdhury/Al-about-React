import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { addToLocalStorage, getDataOfLocalStorage, clearLocalstorage } from "../Utils/Utils";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);




  useEffect(() => {
    if(products.length){  const stroedPorductsId = getDataOfLocalStorage();
      
      const previousCart = [];
      for (const id in stroedPorductsId) {

        const foundProduct = products.find(product => product.id == id);

        foundProduct.quantity = stroedPorductsId[id];

        previousCart.push(foundProduct);

      }

      setCart(previousCart);
}
  }, [products]);


  const handleAddToCart = (selectedProduct) => {

    let newCart = [];

    const exist = cart.find(product => product.id == selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);


      selectedProduct.quantity = selectedProduct.quantity + 1;
      newCart = [...rest, selectedProduct]
    }


    addToLocalStorage(selectedProduct.id)
    setCart(newCart);
  };

  const handleClearCart = () => {
    setCart([]);
    clearLocalstorage()
  };


  /*   const handleAdd =() =>{
      localStorage.setItem('cart' , JSON.stringify())
    }
    
    const handleShow =() =>{
      
    }
  
    const handleRemovey =() =>{
      
    }
   */

  return (
    <>
      <div className='shop'>
        <div className='products-container'>
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div className='cart-container'>
          <Cart
            cart={cart}
            products={products}
            handleClearCart={handleClearCart}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
