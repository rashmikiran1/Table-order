import React, { useContext } from "react";
import CartContext from "../context/cartContext"; 
import Modal from "../UI/modal";
import classes from './cart.module.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext); 

    const cartItems = (
        <ul className={classes['cartitems']}>
            {cartCtx.items.map((item) => (
                
                <li key={item.id}>{item.name}</li>
                
            ))}
        </ul>
        
    );
    console.log(cartItems)
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartCtx.items}</span>
            <span>Rs. {cartCtx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            <button className={classes.button} >order</button>
        </div>
      </Modal>
    );
}

export default Cart;
