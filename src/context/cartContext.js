import React, { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setCartItems((prevItems) => {
    });
  };

  const removeItemFromCartHandler = (id) => {
    setCartItems((prevItems) => {
    });
  };

  const clearCartHandler = () => {
    setCartItems([]);
  };

  const contextValue = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
