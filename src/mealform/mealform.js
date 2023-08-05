import React, { useContext } from "react";
import Input from "../UI/input";
import classes from './form.module.css';
import CartContext from "../context/cartContext";

const MealForm = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,   // Use the props received from the parent component
            name: props.name,
            amount: 1,
            price: props.price,
        });
    };

    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick={addToCartHandler}>+ Add</button>
        </form>
    );
}

export default MealForm;
