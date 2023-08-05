import React, { useContext } from 'react';
import CartContext from '../context/cartContext';
import MealForm from '../mealform/mealform';
import classes from './mealitem.module.css';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price,
        });
    };

    console.log("Adding to cart:", props.id, props.name, props.price);

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.Description}>{props.Description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealForm
                    id={props.id}         // Pass id, name, and price as props to MealForm
                    name={props.name}
                    price={props.price}
                />
            
            </div>
        </li>
    );
}

export default MealItem;
