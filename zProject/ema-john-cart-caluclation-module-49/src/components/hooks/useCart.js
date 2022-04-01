import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";
import Product from "../Product/Product";

const useCart = (products) => {
    const [cart , setCart] = useState([]);

    useEffect(()=>{
        const storedCart =  getStoredCart();
        let savedCart = []

        

        for(const id in storedCart){
            const addedProduct = products.find(Product => Product.id == id)
            if(addedProduct){
                const quantity = storedCart[id];
                
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        };
        setCart(savedCart)
    },[products]);
    return [cart , setCart];
};

export default useCart;