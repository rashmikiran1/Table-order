import Modal from "../UI/modal";
import classes from './cart.module.css';
const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cartitems']}>
            {[{id:'1', name:'pasta', Amount:'3', price:'200'}].map((item) =>(
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>Rs.100</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            <button className={classes.button}>order</button>
        </div>
      </Modal>
      
    )
}
export default Cart