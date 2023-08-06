import React, { useContext } from "react";
import CartContext from "../context/cartContext"; 
import Modal from "../UI/modal";
import classes from './cart.module.css';
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.items.reduce((total, item) => {
        return total + item.price * item.amount;
    }, 0);
    const cartItems = cartCtx.items ? (
    
        <ul className={classes['cartitems']}>
          {cartCtx.items.map((item) => (
            <li className={classes.menu}
            key={item.id}> Menu = {item.name} Price = Rs.{item.price} 
            Quantity: 
          <button onClick={() => cartCtx.updateItemQuantity(item.id, item.amount - 1)}>-</button>
          {item.amount}
          <button onClick={() => cartCtx.updateItemQuantity(item.id, item.amount + 1)}>+</button>
        </li>
            
          ))}
        </ul>
    
      ) : (
        <p>Your cart is empty.</p>
      );
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
  
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>Rs. {totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            close
          </button>
          <button className={classes.button}>order</button>
        </div>
      </Modal>
    );
  };
  
export default Cart;
