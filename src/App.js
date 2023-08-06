import React, { useState } from "react";
import Header from "./header/Header";
import Cart from './cart/cart';

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [cartItems, setCartItems] = useState([]); 

  const showCart = () => {
    setCartShow(true);
  };

  const hideCart = () => {
    setCartShow(false);
  };

  const addItemToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div>
      {cartShow && (
        <Cart onClose={hideCart}  />
      )}
      <Header onShowcart={showCart} />
    </div>
  );
}

export default App;
