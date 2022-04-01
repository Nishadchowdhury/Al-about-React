import React from 'react';
import { useNavigate } from 'react-router';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import ReviweItem from '../ReviweItem/ReviweItem';

const Others = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemoveProduct = product => {

        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)

    }


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cart.map(product => <ReviweItem
                        handleRemoveProduct={handleRemoveProduct}
                        key={product.id}
                        product={product}
                    ></ReviweItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart} >

                    <button onClick={()=>navigate('/inventory')} >Proceed Checkout</button>

                </Cart>
            </div>

        </div>
    );
};

export default Others;