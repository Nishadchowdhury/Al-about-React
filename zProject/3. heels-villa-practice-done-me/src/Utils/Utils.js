const getDataOfLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('shoping-cart'));
}

const setDataInLocalStorage = (id)=> {

    let shopingCart = {};
    
    const exist = getDataOfLocalStorage();

    if(!exist){
        shopingCart[id] = 1;
    }else{
        shopingCart = exist;

        if(shopingCart[id]){
            const newCount = shopingCart[id] + 1;
            shopingCart[id] = newCount;
        }else{
            shopingCart[id] = 1;
        }
    }
    
    localStorage.setItem('shoping-cart' , JSON.stringify(shopingCart))
    
}

const deleteToLocal = () => localStorage.removeItem('shoping-cart');


export {
    getDataOfLocalStorage,
    setDataInLocalStorage,
    deleteToLocal
    
}