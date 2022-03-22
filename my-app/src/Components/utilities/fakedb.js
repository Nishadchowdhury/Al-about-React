// use localStorage to manage cart data 

const addToDB = id =>{

    let shoppingCart = {};
    
    // get the shopping cart form localstorage
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;

    }else{
        shoppingCart[id]= 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
    
    }

    const removeFormDB = id =>{
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart){
            const shoppingCart = JSON.parse(storedCart);
            if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart))
            }
        } 
    }

    const deleteShoppingcart = () =>{
        localStorage.removeItem('shopping-cart')
    }

    // const items = [
    //     {id: 1, name: 'alta', price: 100},
    //     {id: 2, name: 'alta', price: 200},
    //     {id: 3, name: 'alta', price: 300},
    //     {id: 4, name: 'alta', price: 400},
    //     {id: 5, name: 'alta', price: 500},
    // ]


    // const itemSumReducer = (previous, current) => previous + current.price;
    // const itemTotal = items.reduce( itemSumReducer ,0);
    //  VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV


    const getTotalPrice = products =>{
        const reducer = (provious , current) => provious + current.price;
        const total =products.reduce(reducer, 0)
        return total;
    };

export {addToDB ,  
    removeFormDB ,
    deleteShoppingcart ,
    
    getTotalPrice as getTotal
};