import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { setDataInLocalStorage , deleteToLocal ,getDataOfLocalStorage} from '../Utils/Utils'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {

    let cartDataAr = [];

    const exist = cart.find(product => product.id == selectedProduct.id);
    if (exist) {
      const rest = cart.filter(product => product.id !== exist.id);

      exist.quantity = exist.quantity + 1;

      cartDataAr = [...rest, exist];

    } else {
      selectedProduct.quantity = 1
      cartDataAr = [...cart, selectedProduct];
    }

    setDataInLocalStorage(selectedProduct.id)

    setCart(cartDataAr);
    // console.log(cartDataAr);

  };

  const handleClearCart = () => {
    deleteToLocal()
    setCart([])
  };

  
  
  useEffect(()=>{
    if(products.length){
      const localData = getDataOfLocalStorage();

      let finalDataOfCart = [];

      for(const id in localData){
        const cartDataUnique = products.find(product => product.id == id)
        cartDataUnique.quantity = localData[id];
        finalDataOfCart.push(cartDataUnique);
      }
      setCart(finalDataOfCart)
    }

  },[products]);



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
