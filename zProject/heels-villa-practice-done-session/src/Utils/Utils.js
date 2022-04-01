const getDataOfLocalStorage = () => {
  return JSON.parse(localStorage.getItem('shoing-cart'));
}



const addToLocalStorage = (id) => {

  let shopingCart = {};

  const exist = getDataOfLocalStorage();

  if (!exist) {
    shopingCart[id] = 1;

  } else {
    shopingCart = exist;

    if (shopingCart[id]) {

      const newCount = shopingCart[id] + 1;
      shopingCart[id] = newCount;

    } else {

      shopingCart[id] = 1;

    }
  }




  localStorage.setItem('shoing-cart', JSON.stringify(shopingCart))
}

const clearLocalstorage = () => localStorage.removeItem('shoing-cart');

export {
  addToLocalStorage,
  getDataOfLocalStorage,
  clearLocalstorage
};