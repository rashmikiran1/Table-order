import React, { useContext } from "react";
import Mymeals from "../meals/meal";
import classes from '../header/header.module.css';
import CartContext from "../context/cartContext";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemCount = cartCtx.items.reduce((total, item) => total + item.amount, 0);
  console.log(cartItemCount)
  return (
        <div>
            <div className={classes.icon}>
                <div className={classes.meal}>Freshmeal</div>

                <div className={classes.cart}><img src="\images\cart.png" alt="cartimage" 
                style={{width:'30px',height:'30px'}}/>
                
                <button onClick={props.onShowcart}>YourCart</button>
                <p>{cartItemCount}</p>
                </div>
            </div>
            <div><img src="\images\header.webp" alt="header" style={{width:'100%', height:'300px'}}/>
            </div>
            <Mymeals />
        </div>
        
    )
}
export default Header;